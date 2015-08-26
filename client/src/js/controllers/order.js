/**
 * Created by saiful.
 */
app.controller('OrderIndexCtrl', ['$scope', 'Order', '$modal', 'toaster', '$filter', 'AuthService',
  function($scope, Order, $modal, toaster, $filter, AuthService) {

    //  pagination
    $scope.itemsByPage=10;

    // index
    $scope.orders = [];
    Order.find({
        filter: {include: ['customer']}
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
              toaster.pop('success', '', 'Order deleted successfully');
            }
          },
          function (error) {
            toaster.pop('error', '', 'Failed to delete order! You might need to remove order item first');
          }
        );
      });
    };

  }]);

app.controller('OrderNewCtrl', ['$scope', '$rootScope', 'Order', 'Customer', 'OrderMethod', 'PaymentMethod',
  'OrderGroup', '$state', 'toaster',
  function ($scope, $rootScope, Order, Customer, OrderMethod, PaymentMethod, OrderGroup, $state, toaster) {

    // init
    $scope.order = new Order();

    // default values
    $scope.order.datePurchase = moment().format('DD-MMMM-YYYY');

    // Get user id
    $scope.order.personId = $rootScope.currentUser.id;

    // get-all customers
    Customer.find(
      function (result) {
        $scope.customers = result;
      }
    );
    // get-all order methods
    OrderMethod.find(
      function (result) {
        $scope.orderMethods = result;
      }
    );
    // get-all payment method
    PaymentMethod.find(
      function (result) {
        $scope.paymentMethods = result;
      }
    );
    // get-all group
    OrderGroup.find(
      function (result) {
        $scope.orderGroups = result;
      }
    );

    $scope.addOrder = function () {
      // Get user id
      $scope.order.personId = $rootScope.currentUser.id;
      Order.create(
        {},
        $scope.order,
        function (result) {
          toaster.pop('success', '', 'Order added successfully, now you can add order items');
          $state.go('app.order.detail', {id: result.id});
        },
        function (error) {
          toaster.pop('error', '', 'Failed to add a order!');
        }
      );
    };


  }]);

app.controller('OrderEditCtrl', ['$scope', 'Order', 'Customer', 'OrderMethod', 'PaymentMethod', 'OrderGroup',
  '$state', '$stateParams', 'toaster',
  function ($scope, Order, Customer, OrderMethod, PaymentMethod, OrderGroup, $state, $stateParams, toaster) {

    // get current order
    $scope.order = Order.findById( { id: $stateParams.id } );
    $scope.orderCustomerIdCantBeChanged = $scope.order.customerId;

    // get-all customers
    Customer.find(
      function (result) {
        $scope.customers = result;
      }
    );
    // get-all order methods
    OrderMethod.find(
      function (result) {
        $scope.orderMethods = result;
      }
    );
    // get-all payment method
    PaymentMethod.find(
      function (result) {
        $scope.paymentMethods = result;
      }
    );
    // get-all group
    OrderGroup.find(
      function (result) {
        $scope.orderGroups = result;
      }
    );

    // update
    $scope.updateOrder = function () {
      $scope.order.customerId = $scope.orderCustomerIdCantBeChanged; // for security

      Order.update(
        { where: {id: $stateParams.id } },
        $scope.order,
        function () {
          toaster.pop('success', '', 'Order updated successfully');
          $state.go('app.order.list');
        },
        function (error) {
          toaster.pop('error', '', 'Failed to update order!');
        }
      );

    };

  }]);

app.controller('OrderDetailCtrl', ['$scope', 'Order', 'Product', '$state',
  '$stateParams', '$modal', 'toaster', '$filter',
  function ($scope, Order, Product, $state, $stateParams, $modal, toaster, $filter) {

    //  pagination
    $scope.itemsByPage=10;

    // get current order (panel info)
    $scope.order = {};
    Order.findById({
      id: $stateParams.id,
      filter: {include: ['customer', 'orderGroup', 'person']}
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

    $scope.calculateTotalOrderPrice = function (key, each, total) {
      if (total[key] === undefined) total[key] = 0; // check if object key exist
      total[key] += Number(each);
      return total;
    };

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
            where: { active: true },
            order: [ 'name ASC' ]
          }
        }, function (result) {
          $scope.item.allActiveProducts = result;
        });
      }
    };
    $scope.getAllActiveProducts(); // init

    $scope.item.getProductPrices = function (product) {
      Product.currentPriceOptions(
        { id: product.id },
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

        //angular.forEach(stockUpdateData, function (val, key) {
        //  stockUpdateData[key].amountCurrent = val.amountAfter;
        //  //delete stockUpdateData[key].amountAfter;
        //});

        Product.bulkUpdateStockAmount(
          {cmd: 'subtract'},
          stockUpdateData,
          function (result) {
            if (!result)
              toaster.pop('error', '', 'Failed to add an item!');
            else {
              Order.orderItems.create(
                {id: $scope.order.id},
                $scope.item,
                function (result) {
                  result.productName = $scope.item.product.name; // hack
                  $scope.order.totalPrice = $scope.calculateTotalOrderPrice(
                    result.currencyCode, result.priceTotal, $scope.order.totalPrice);
                  $scope.orderItems.push(result);
                  toaster.pop('success', '', 'Item added successfully');
                  $scope.resetValues();
                },
                function (error) {
                  toaster.pop('error', '', 'Failed to add an item!');
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
              toaster.pop('error', '', 'Failed to delete an item!');
            else {
              Order.orderItems.destroyById(
                { id: $scope.order.id,
                  fk: row.id },
                function () {
                  var index = $scope.orderItems.indexOf(row);
                  if (index !== -1) {
                    $scope.orderItems.splice(index, 1);
                    toaster.pop('success', '', 'Item deleted successfully');
                  }
                },
                function (error) {
                  toaster.pop('error', '', 'Failed to delete item!');
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
