/**
 * Created by saiful.
 */
app.controller('OrderIndexCtrl', ['$scope', 'Order', 'OrderMethod', '$modal', 'toaster', '$filter',
  function($scope, Order, OrderMethod, $modal, toaster, $filter) {

    //  pagination
    $scope.itemsByPage=10;

    $scope.orderMethods = OrderMethod.find();

    // index
    $scope.orders = [];
    Order.find({
        filter: {include: ['customer'], order: ['id DESC']}
      }, function (result) {
      angular.forEach(result, function (res) {
        res.datePurchase = $filter('date')(res.datePurchase, 'yyyy-MM-dd'); //cast date as localtime
        res.datePayment = $filter('date')(res.datePayment, 'yyyy-MM-dd');
        res.dateDelivery = $filter('date')(res.dateDelivery, 'yyyy-MM-dd');
        res.customerName = res.customer.name; // hack
        $scope.orders.push(res);
      });
      $scope.displayOrders = [].concat($scope.orders);
    });

    // remove
    $scope.remove = function (row) {
      var modalInstance = $modal.open({
        templateUrl: 'tpl/order/modal.delete.html',
        controller: 'OrderModalInstanceCtrl',
        size: 'lg',
        resolve: {
          item: function () {
            return row;
          }
        }
      });
      modalInstance.result.then(function () {
        Order.deleteById(
          { id: row.id },
          function () {
            var index = $scope.orders.indexOf(row);
            if (index !== -1) {
              $scope.orders.splice(index, 1);
              toaster.pop('success', '', 'Order berhasil dihapus');
            }
          },
          function (error) {
            toaster.pop('error', '', 'Order gagal dihapus! Silakan hapus item order terlebih dahulu (klik Detail)');
          }
        );
      });
    };

  }]);

app.controller('OrderNewCtrl', ['$scope', '$rootScope', 'Order', 'SOGroup', 'SONumber', 'SOGroupValue', 'Customer',
  'PaymentMethod', '$state', '$stateParams', 'toaster',
  function ($scope, $rootScope, Order, SOGroup, SONumber, SOGroupValue, Customer, PaymentMethod, $state,
            $stateParams, toaster) {

    // init
    $scope.order = new Order();

    $scope.order.orderMethodName = $stateParams.type;

    // default values
    $scope.order.datePurchase = moment().format('DD-MMMM-YYYY');
    $scope.order.dateDelivery = moment().add(1, 'days').format('DD-MMMM-YYYY');
    $scope.order.datePayment = moment().add(15, 'days').format('DD-MMMM-YYYY');

    // Get user id
    $scope.order.personId = $rootScope.currentUser.id;

    // get-all SO Group & today SO Number
    $scope.soGroups = [];
    var nowDate = moment().format('DD-MMMM-YYYY');
    var nowYear = moment().format('YYYY');
    SOGroup.find({
      filter: {
        where: { orderMethodName: $stateParams.type },
        include: [
          {
            relation: 'soNumbers',
            scope: {
              where: {
                and: [ { dateOpen: {lte: nowDate} }, { dateClose: {gte: nowDate} } ]
              }
            }
          },
          {
            relation: 'soGroupValues',
            scope: {
              where: {
                 year: nowYear
              }
            }
          }
        ]
      }
    }, function (result) {

      angular.forEach(result, function (group, key) {
        if (group.soGroupValues.length > 0) {
          group.soGroupCurrentValue = group.soGroupValues[0].currentValue;
        } else {
          // create year
          SOGroupValue.create(
            {},
            {
              year: nowYear,
              currentValue: 0,
              soGroupId: group.id
            },
            function () {
              toaster.pop('success', '', 'New Year Order Group '+group.name+' initialized');
            },
            function () {
              toaster.pop('error', '', 'New Year Order Group failed to initialize!');
            }
          );
          group.soGroupCurrentValue = 0;
        }
        if (group.soGroupCurrentValue < group.maxLimit) // masukkan jika masih ada ruang untuk order
          $scope.soGroups.push(group);
      });

    });

    // get-all customers
    Customer.find({
        filter: { where: { and: [ {orderMethodName: $stateParams.type}, {active: true}]}}
      },
      function (result) {
        $scope.customers = result;
      }
    );
    // get-all payment method
    PaymentMethod.find(
      function (result) {
        $scope.paymentMethods = result;
      }
    );
    // orderByOptions
    $scope.orderByOptions = ['Phone', 'SMS', 'Datang'];

    // watch selected soGroup
    $scope.$watchGroup(['order.soGroup'], function() {
      if ($scope.order.soGroup) {
        if ($scope.order.soGroup.soNumbers.length < 1) {
          $scope.order.newSONumber = true;
        } else {
          $scope.order.soNumberId = $scope.order.soGroup.soNumbers[0].id;
        }

      }
    });
    $scope.$watchGroup(['order.newSONumber'], function() {
      if ($scope.order.newSONumber) {
        $scope.order.soNumber = new SONumber;
        $scope.order.soNumber.dateOpen = moment().format('DD-MMMM-YYYY');
        $scope.order.soNumber.dateClose = moment().format('DD-MMMM-YYYY');
        $scope.order.soNumberId = null;
      } else {
        $scope.order.soNumberId = $scope.order.soGroup.soNumbers[0].id;
      }
    });

    $scope.addOrder = function () {

      if ($scope.order.newSONumber) {
        if (!$scope.order.soNumber.dateOpen) $scope.order.soNumber.dateOpen = moment().format('DD-MMMM-YYYY');
        if (!$scope.order.soNumber.dateClose) $scope.order.soNumber.dateClose = moment().format('DD-MMMM-YYYY');
        $scope.order.soNumber.soGroupId = $scope.order.soGroup.id;
        $scope.order.soNumber.currencyCode = $scope.order.soGroup.currencyCode;
        $scope.order.soNumber.personId = $rootScope.currentUser.id;
        $scope.order.soNumber.orderMethodName = $stateParams.type;
        $scope.order.soNumber.soAmount = 0;
        SONumber.create(
          {},
          $scope.order.soNumber,
          function (result) {
            toaster.pop('success', '', 'Nomor SO baru telah berhasil dibuat. No: '+result.id);
            // START: Create Order
            $scope.order.personId = $rootScope.currentUser.id;
            $scope.order.orderMethodName = $stateParams.type; //reset
            $scope.order.currencyCode = $scope.order.soGroup.currencyCode;
            $scope.order.orderAmount = 0;
            $scope.order.soNumberId = result.id;
            delete $scope.order.soGroup;
            delete $scope.order.soNumber;
            Order.create(
              {},
              $scope.order,
              function (result) {
                toaster.pop('success', '', 'Order baru telah berhasil dibuat. Selanjutnya tambahkan item order.');
                $state.go('app.order.detail', {id: result.id});
              },
              function (error) {
                toaster.pop('error', '', 'Order gagal dibuat');
              }
            );
          },
          function (error) {
            toaster.pop('error', '', 'Nomor SO gagal dibuat!');
          }
        );
      } else {
        // START: Create Order
        $scope.order.personId = $rootScope.currentUser.id;
        $scope.order.orderMethodName = $stateParams.type; //reset
        $scope.order.currencyCode = $scope.order.soGroup.currencyCode;
        $scope.order.orderAmount = 0;
        delete $scope.order.soGroup;
        delete $scope.order.soNumber;
        Order.create(
          {},
          $scope.order,
          function (result) {
            toaster.pop('success', '', 'Order baru telah berhasil dibuat. Selanjutnya tambahkan item order.');
            $state.go('app.order.detail', {id: result.id});
          },
          function (error) {
            toaster.pop('error', '', 'Order gagal dibuat');
          }
        );
      }
    };

  }]);

app.controller('OrderEditCtrl', ['$scope', 'Order', 'Customer', 'PaymentMethod', 'SOGroup', 'SONumber', 'SOGroupValue',
  '$state', '$stateParams', 'toaster',
  function ($scope, Order, Customer, PaymentMethod, SOGroup, SONumber, SOGroupValue, $state, $stateParams, toaster) {

    // get-all SO Group & today SO Number
    $scope.soGroups = [];
    var nowDate = moment().format('DD-MMMM-YYYY');
    var nowYear = moment().format('YYYY');
    SOGroup.find({
      filter: {
        where: { orderMethodName: $stateParams.type },
        include: [
          {
            relation: 'soNumbers',
            scope: {
              where: {
                and: [ { dateOpen: {lte: nowDate} }, { dateClose: {gte: nowDate} } ]
              }
            }
          },
          {
            relation: 'soGroupValues',
            scope: {
              where: {
                year: nowYear
              }
            }
          }
        ]
      }
    }, function (result) {
      angular.forEach(result, function (group, key) {
        if (group.soGroupValues.length > 0) {
          group.soGroupCurrentValue = group.soGroupValues[0].currentValue;
        } else {
          // create year
          SOGroupValue.create(
            {},
            {
              year: nowYear,
              currentValue: 0,
              soGroupId: group.id
            },
            function () {
              toaster.pop('success', '', 'New Year Order Group '+group.name+' initialized');
            },
            function () {
              toaster.pop('error', '', 'New Year Order Group failed to initialize!');
            }
          );
          group.soGroupCurrentValue = 0;
        }
        if (group.soGroupCurrentValue < group.maxLimit) // masukkan jika masih ada ruang untuk order
          $scope.soGroups.push(group);
      });

      Order.findById(
        { id: $stateParams.id,
          filter: {
            include: {
              relation: 'soNumber',
              scope: {
                include: {
                  relation: 'soGroup',
                  scope: {
                    include: 'soNumbers'
                  }
                }
              }
            }
          }
        },
        function (result) {
          $scope.order = result;
          $scope.orderCustomerIdCantBeChanged = $scope.order.customerId;
          $scope.order.orderMethodName = $stateParams.type;
          $scope.order.soGroup = result.soNumber.soGroup;
        }
      );

    });

    // get-all customers
    Customer.find(
      function (result) {
        $scope.customers = result;
      }
    );
    // get-all payment method
    PaymentMethod.find(
      function (result) {
        $scope.paymentMethods = result;
      }
    );

    // orderByOptions
    $scope.orderByOptions = ['Phone', 'SMS', 'Datang'];

    // update
    // TODO: calculate order amount upon change SO group
    // Override: cant change group or number, please delete and recreate new
    $scope.updateOrder = function () {
      $scope.order.customerId = $scope.orderCustomerIdCantBeChanged; // for security

      Order.update(
        { where: {id: $stateParams.id } },
        $scope.order,
        function () {
          toaster.pop('success', '', 'Metadata Order berhasil diperbarui');
          $state.go('app.order.list');
        },
        function (error) {
          toaster.pop('error', '', 'Metadata Order gagal diperbarui!');
        }
      );

    };

  }]);

app.controller('OrderDetailCtrl', ['$scope', 'Order', 'Product', '$state',
  '$stateParams', '$modal', 'toaster', '$filter',
  function ($scope, Order, Product, $state, $stateParams, $modal, toaster, $filter) {

    //  pagination
    $scope.itemsByPage=10;

    // function to calculate order price
    $scope.calculateTotalOrderPrice = function (key, each, total) {
      if (total[key] === undefined) total[key] = 0; // check if object key exist
      total[key] += Number(each);
      return total;
    };

    // start: ORDER ITEMS (table contents)
    $scope.orderItems = [];

    // get-all order items function
    $scope.getAllOrderItems = function () {
      Order.orderItems({
        id: $stateParams.id, // id of the order
        filter: {
          include: ['product']
        }
      }, function (result) {
        angular.forEach(result, function (val, key) {
          result[key].productName = val.product.name;
          $scope.order.totalPrice = $scope.calculateTotalOrderPrice(
            val.currencyCode, val.priceTotal, $scope.order.totalPrice);
        });
        $scope.orderItems = result;
        $scope.displayOrderItems = [].concat($scope.orderItems);
      });
    };

    // get current order (panel info)
    var nowYear = new Date().getFullYear();
    $scope.order = {};
    Order.findById({
      id: $stateParams.id,
      filter: {
        include: [
          'customer',
          'person',
          {
            relation: 'soNumber',
            scope: {
              include: {
                relation: 'soGroup',
                scope: {
                  include: {
                    relation: 'soGroupValues',
                    scope: {
                      where: {year: nowYear},
                      limit: 1
                    }
                  }
                }
              }
            }
          }
        ]}
    }, function (result) {
      $scope.order = result;
      $scope.order.datePurchase = $filter('date')(result.datePurchase, 'yyyy-MM-dd'); //cast date as localtime
      $scope.order.datePayment = $filter('date')(result.datePayment, 'yyyy-MM-dd');
      $scope.order.dateDelivery = $filter('date')(result.dateDelivery, 'yyyy-MM-dd');
      $scope.order.totalPrice = {};  // reset object
      $scope.getAllOrderItems(); // get-all order items
    });


    // start: add item functions
    // defaults
    $scope.item = {};
    $scope.item.allActiveProducts = [];
    $scope.resetValues = function () {
      $scope.item.id = null;
      $scope.item.quantity = 1;
      $scope.item.priceEach = null;
      $scope.item.priceTotal = null;
      $scope.item.priceName = null;
      $scope.item.note = null;
      $scope.item.productId = null;
      $scope.item.product = null;
      $scope.item.currencyCode = null;
      $scope.item.stockBatchs = null;
      $scope.item.priceDetails = null;
      //$scope.item.orderId = $scope.order.id;
      $scope.item.productPrice = {};
      $scope.item.productStocksSelected = [];
      $scope.item.productStocksCalculated = 0;
      $scope.item.priceTotal = 0;
    };
    $scope.resetValues(); // init

    $scope.getAllActiveProducts = function () {
      if ($scope.item.allActiveProducts.length < 1) { // check whether active product loaded or not
        Product.find({
          filter: {
            where: { and: [ {active: true} ]},
            order: [ 'name ASC' ]
          }
        }, function (result) {
          $scope.item.allActiveProducts = result;
        });
      }
    };
    $scope.getAllActiveProducts(); // init

    $scope.item.getProductPrices = function (product) {
      Product.currentPriceByMethodAndCurrencyOptions(
        { id: product.id, method: $scope.order.orderMethodName, currency: $scope.order.currencyCode },
        function (result) {
          $scope.item.productPrices = result;
          $scope.item.productPrice = result[0]; // take first recommended price
        }
      );
    };

    $scope.item.getProductStocks = function (product) {
      $scope.item.productStocksSelected = [];
      Product.currentStockOptions(
        { id: product.id },
        function (result) {
          $scope.item.productStocks = result;
          $scope.item.productStocksSelected.push(result[0]); // take first recommended stock
        }
      )
    };

    $scope.item.getProductPricesAndStocks = function (product) {
      $scope.item.getProductPrices(product);
      $scope.item.getProductStocks(product);
    };

    $scope.item.calculateStock = function () {
      $scope.item.productStocksCalculated = 0;
      angular.forEach($scope.item.productStocksSelected, function (prod) {
        $scope.item.productStocksCalculated += prod.amountCurrent;
      });
      return $scope.item.productStocksCalculated;
    };

    $scope.item.calculateTotalPrices = function () {
      $scope.item.priceTotal = $scope.item.quantity * $scope.item.productPrice.amount;
      return $scope.item.priceTotal;
    };

    // watch selected stocks and quantity changes
    $scope.$watchGroup(['item.productStocksSelected', 'item.quantity'], function() {
      $scope.item.processStocks();
      if ($scope.item.priceTotal > $scope.item.maxOrderVal) {
        toaster.pop('error', '', 'Jumlah harga barang melebihi nilai order maksimal yang diperkenankan!');
        $scope.item.quantity = 0;
      }
    });

    $scope.item.processStocks = function () {
      $scope.item.stockBatchs = []; // reset
      var qty = $scope.item.quantity;
      for (var i = 0, len = $scope.item.productStocksSelected.length; i < len; i++) {
        $scope.item.stockBatchs[i] = $scope.item.productStocksSelected[i];
        $scope.item.displayStockBatchs = $scope.item.stockBatchs;
        if (qty <= $scope.item.productStocksSelected[i].amountCurrent) {
          $scope.item.stockBatchs[i].amountAfter = $scope.item.stockBatchs[i].amountCurrent - qty;
          $scope.item.stockBatchs[i].amountDelta = qty;
          break;
        } else {
          $scope.item.stockBatchs[i].amountDelta = $scope.item.productStocksSelected[i].amountCurrent;
          qty -= $scope.item.productStocksSelected[i].amountCurrent;
          $scope.item.stockBatchs[i].amountAfter = 0;
        }
      }
    };

    // add items
    $scope.addItem = function () {
      $scope.item.maxOrderVal = Number($scope.order.soNumber.soGroup.maxLimit) -
                                Number($scope.order.soNumber.soGroup.soGroupValues[0].currentValue);
      var modalInstance = $modal.open({
        templateUrl: 'tpl/order/modal.form.item.html',
        controller: 'OrderModalInstanceCtrl',
        size: 'lg',
        resolve: {
          item: function () {
            return $scope.item;
          }
        }
      });
      modalInstance.result.then(function () {
        // get the values
        var stockUpdateData = $scope.item.stockBatchs;
        $scope.item.productId = $scope.item.product.id;
        $scope.item.currencyCode = $scope.item.productPrice.currencyCode;
        $scope.item.priceName = $scope.item.productPrice.name;
        $scope.item.priceEach = $scope.item.productPrice.amount;
        $scope.item.priceDetails = JSON.stringify($scope.item.productPrice);
        $scope.item.stockBatchs = JSON.stringify($scope.item.stockBatchs);


        Product.bulkUpdateStockAmount(
          {cmd: 'subtract'},
          stockUpdateData,
          function (result) {
            if (!result)
              toaster.pop('error', '', 'Item gagal ditambahkan!');
            else {
              Order.orderItems.create(
                {id: $scope.order.id},
                $scope.item,
                function (result) {
                  $scope.order.orderAmount = Number($scope.order.orderAmount) + Number(result.priceTotal);
                  $scope.order.soNumber.soGroup.soGroupValues[0].currentValue =
                    Number($scope.order.soNumber.soGroup.soGroupValues[0].currentValue) + Number(result.priceTotal);
                  result.productName = $scope.item.product.name; // hack
                  $scope.order.totalPrice = $scope.calculateTotalOrderPrice(
                    result.currencyCode, result.priceTotal, $scope.order.totalPrice);
                  $scope.orderItems.push(result);
                  toaster.pop('success', '', 'Item berhasil ditambahkan');
                  $scope.resetValues();
                },
                function (error) {
                  toaster.pop('error', '', 'Item gagal ditambahkan!');
                }
              );
            }
          }
        );

      });
    };

    // remove item
    $scope.removeItem = function (row) {
      var modalInstance = $modal.open({
        templateUrl: 'tpl/order/modal.delete.item.html',
        controller: 'OrderModalInstanceCtrl',
        size: 'lg',
        resolve: {
          item: function () {
            return row;
          }
        }
      });
      modalInstance.result.then(function () {
        var stockUpdateData = JSON.parse(row.stockBatchs);
        Product.bulkUpdateStockAmount(
          {cmd: 'add'},
          stockUpdateData,
          function (result) {
            if (!result)
              toaster.pop('error', '', 'Item barang gagal dihapus!');
            else {
              Order.orderItems.destroyById(
                { id: $scope.order.id,
                  fk: row.id },
                function () {
                  var index = $scope.orderItems.indexOf(row);
                  if (index !== -1) {
                    $scope.orderItems.splice(index, 1);
                    toaster.pop('success', '', 'Item barang berhasil dihapus');
                    $scope.order.orderAmount = Number($scope.order.orderAmount) - Number(row.priceTotal);
                    $scope.order.soNumber.soGroup.soGroupValues[0].currentValue =
                      Number($scope.order.soNumber.soGroup.soGroupValues[0].currentValue) - Number(result.priceTotal);
                    $scope.resetValues();
                  }
                },
                function (error) {
                  toaster.pop('error', '', 'Item barang gagal dihapus!');
                }
              );
            }
          }
        );
      });
    };

    $scope.orderInvoice = function () {
      console.log($scope);
      var modalInstance = $modal.open({
        templateUrl: 'tpl/order/invoice.html',
        controller: 'OrderModalInstanceCtrl',
        size: 'lg',
        resolve: {
          item: function () {
            return $scope;
          }
        }
      });

    };

  }]);

app.controller('OrderInvoiceCtrl', ['$scope', 'Order', 'Product', '$state',
  '$stateParams', '$modal', 'toaster', '$filter',
  function ($scope, Order, Product, $state, $stateParams, $modal, toaster, $filter) {

    // get current order
    $scope.order = {};
    Order.findById({
      id: $stateParams.id,
      filter: {include: ['customer', 'orderGroup']}
    }, function (result) {
      $scope.order = result;
      $scope.order.datePurchase = $filter('date')(result.datePurchase, 'yyyy-MM-dd'); //cast date as localtime
      $scope.order.datePayment = $filter('date')(result.datePayment, 'yyyy-MM-dd');
      $scope.order.dateDelivery = $filter('date')(result.dateDelivery, 'yyyy-MM-dd');
      $scope.order.totalPrice = {};  // reset object
      $scope.getAllOrderItems(); // get-all order items
    });

    // start: ORDER ITEMS (table contents)
    $scope.orderItems = [];

    // get-all order items function
    $scope.getAllOrderItems = function () {
      Order.orderItems({
        id: $stateParams.id, // id of the order
        filter: {
          include: ['product']
        }
      }, function (result) {
        angular.forEach(result, function (val, key) {
          result[key].productName = val.product.name;
          $scope.order.totalPrice = $scope.calculateTotalOrderPrice(
            val.currencyCode, val.priceTotal, $scope.order.totalPrice);
        });
        $scope.orderItems = result;
        $scope.displayOrderItems = [].concat($scope.orderItems);
      });
    };
  }]);

app.controller('OrderModalInstanceCtrl', ['$scope', '$modalInstance', 'item',
  function($scope, $modalInstance, item) {
    $scope.item = item;

    $scope.ok = function () {
      $modalInstance.close($scope.id);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }]);

app.controller('DatepickerCtrl', ['$scope',
  function($scope) {
    $scope.today = function() {
      $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
      $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1,
      class: 'datepicker'
    };

    $scope.initDate = new Date('2016-15-20');
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
  }]);

app.filter('propsFilter', function() {
  return function(items, props) {
    var out = [];

    if (angular.isArray(items)) {
      items.forEach(function(item) {
        var itemMatches = false;

        var keys = Object.keys(props);
        for (var i = 0; i < keys.length; i++) {
          var prop = keys[i];
          var text = props[prop].toLowerCase();
          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
            itemMatches = true;
            break;
          }
        }

        if (itemMatches) {
          out.push(item);
        }
      });
    } else {
      // Let the output be the input untouched
      out = items;
    }

    return out;
  };
});
