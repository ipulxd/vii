/**
 * Created by saiful.
 */
app.controller('ProductIndexCtrl', ['$scope', 'Product', '$modal', 'toaster',
  function($scope, Product, $modal, toaster) {

    //  pagination
    $scope.itemsByPage=10;

    // index
    $scope.products = Product.find();
    $scope.displayProducts = [].concat($scope.products);

    // remove
    $scope.remove = function (row) {
      var modalInstance = $modal.open({
        templateUrl: 'tpl/product/modal.delete.html',
        controller: 'ProductModalInstanceCtrl',
        size: 'lg',
        resolve: {
          item: function () {
            return row;
          }
        }
      });
      modalInstance.result.then(function () {
        Product.deleteById(
          { id: row.id },
          function () {
            var index = $scope.products.indexOf(row);
            if (index !== -1) {
              $scope.products.splice(index, 1);
              toaster.pop('success', '', 'Product deleted successfully');
            }
          },
          function (error) {
            toaster.pop('error', '', 'Failed to delete product! You may need to remove product stocks and prices first');
          }
        );
      });
    };

  }]);

app.controller('ProductNewCtrl', ['$scope', 'Product', '$state', 'toaster',
  function ($scope, Product, $state, toaster) {

    $scope.addProduct = function () {

      Product.create(
        {},
        $scope.product,
        function () {
          toaster.pop('success', '', 'Product added successfully');
          $state.go('app.product.list');
        },
        function (error) {
          toaster.pop('error', '', 'Failed to add a product!');
        }
      );

    };

    // init
    $scope.product = new Product();

    // default values
    $scope.product.active = true;

  }]);

app.controller('ProductEditCtrl', ['$scope', 'Product', '$state', '$stateParams', 'toaster',
  function ($scope, Product, $state, $stateParams, toaster) {

    // get current product
    $scope.product = Product.findById( { id: $stateParams.id } );

    // update
    $scope.updateProduct = function () {

      Product.update(
        { where: {id: $stateParams.id } },
        $scope.product,
        function () {
          toaster.pop('success', '', 'Product updated successfully');
          $state.go('app.product.list');
        },
        function (error) {
          toaster.pop('error', '', 'Failed to update product!');
        }
      );

    };

  }]);

app.controller('ProductDetailCtrl', ['$scope', 'Product', 'Currency', '$state',
  '$stateParams', '$modal', 'toaster', '$filter',
  function ($scope, Product, Currency, $state, $stateParams, $modal, toaster, $filter) {

    //  pagination
    $scope.itemsByPage=10;

    // get current product - BLOCKING
    $scope.product = Product.findById({id: $stateParams.id});

    // start: PRICE
    $scope.productPrices = [];
    // get current price function
    $scope.getDefaultPrice = function () {
      Product.currentPriceOptions(
        {id: $stateParams.id, limit: 1},
        function (result) {
          $scope.currentPrice = result[0];
        });
    };
    // get default price
    $scope.getDefaultPrice();
    // get-all product prices
    Product.productPrices({
      id: $stateParams.id, // id of the product
      filter: {
        order: [
          'id DESC'
        ]
      }
    }, function (result) {
      angular.forEach(result, function (res) {
        res.dateFrom = $filter('date')(res.dateFrom, 'yyyy-MM-dd'); //cast date as localtime
        res.dateTo = $filter('date')(res.dateTo, 'yyyy-MM-dd');
        $scope.productPrices.push(res);
      });
      //$scope.productPrices = result;
      $scope.displayProductPrices = [].concat($scope.productPrices);
    });

    // add price
    $scope.addPrice = function () {
      $scope.item = {};
      // default & product id
      $scope.item.name = 'Created at ' + moment().format('YYYY-MMMM-DD HH:mm:ss');
      $scope.item.active = true;
      // moment loaded from config no need dep inject
      $scope.item.dateFrom = moment().format('DD-MMMM-YYYY');
      // get currency
      Currency.find(function(result) {
        $scope.item.currencies = result;
      });

      var modalInstance = $modal.open({
        templateUrl: 'tpl/product/modal.form.price.html',
        controller: 'ProductModalInstanceCtrl',
        size: 'lg',
        resolve: {
          item: function () {
            return $scope.item;
          }
        }
      });
      modalInstance.result.then(function () {
        Product.productPrices.create(
          {id: $scope.product.id},
          $scope.item,
          function (result) {
            $scope.productPrices.push(result);
            $scope.item = {};
            toaster.pop('success', '', 'Price added successfully');
            $scope.getDefaultPrice();
          },
          function (error) {
            toaster.pop('error', '', 'Failed to add an price!');
          }
        );
      });
    };

    // remove price
    $scope.removePrice = function (row) {
      var modalInstance = $modal.open({
        templateUrl: 'tpl/product/modal.delete.price.html',
        controller: 'ProductModalInstanceCtrl',
        size: 'lg',
        resolve: {
          item: function () {
            return row;
          }
        }
      });
      modalInstance.result.then(function () {
        Product.productPrices.destroyById(
          { id: row.productId,
            fk: row.id },
          function () {
            var index = $scope.productPrices.indexOf(row);
            if (index !== -1) {
              $scope.productPrices.splice(index, 1);
              toaster.pop('success', '', 'Item deleted successfully');
              $scope.getDefaultPrice();
            }
          },
          function (error) {
            toaster.pop('error', '', 'Failed to delete item!');
          }
        );
      });
    };

    // toggle price 'active' status
    $scope.togglePriceStatus = function (row) {
      var modalInstance = $modal.open({
        templateUrl: 'tpl/product/modal.toggle.price.html',
        controller: 'ProductModalInstanceCtrl',
        size: 'lg',
        resolve: {
          item: function () {
            return row;
          }
        }
      });
      modalInstance.result.then(function () {
        // switch status logic
        if (row.active) {
          row.active = false;
        } else {
          row.active = true;
        }
        Product.productPrices.updateById(
          { id: row.productId,
            fk: row.id },
          {active: row.active},
          function () {
            var index = $scope.productPrices.indexOf(row);
            if (index !== -1) {
              $scope.productPrices[index].active = row.active;
              toaster.pop('success', '', 'Price status updated');
              $scope.getDefaultPrice();
            }
          },
          function (error) {
            var index = $scope.productPrices.indexOf(row);
            if (index !== -1) {
              $scope.productPrices[index].active = !row.active;
              toaster.pop('error', '', 'Price status not updated!');
            }
          }
        );
      });
    };

    // start: STOCK
    $scope.productStocks = [];
    // get current stock will be used
    $scope.getDefaultStock = function () {
      Product.currentStockOptions(
        {id: $stateParams.id, limit: 1},
        function (result) {
          $scope.currentStock = result[0];
        });
    };
    // get default stock
    $scope.getDefaultStock();

    // get-all product stock
    Product.productStocks({
      id: $stateParams.id,
      filter: {
        order: [
          'dateExpire ASC', // yang mendekati expire
          'dateStock ASC', // yg masuk gudang lebih dulu
          'id ASC' // yg diinput duluan
        ]
      }
    }, function (result) {
      angular.forEach(result, function (res) {
        res.dateExpire = $filter('date')(res.dateExpire, 'yyyy-MM-dd'); //cast date as localtime
        res.dateStock = $filter('date')(res.dateStock, 'yyyy-MM-dd');
        $scope.productStocks.push(res);
      });
      //$scope.productStocks = result;
      $scope.displayProductStocks = [].concat($scope.productStocks);
    });

    // add stock
    $scope.addStock = function () {
      $scope.item = {};
      // default & product id
      $scope.item.batchName = 'Created at ' + moment().format('YYYY-MMMM-DD HH:mm:ss');
      $scope.item.active = true;
      // moment loaded from config no need dep inject
      $scope.item.dateStock = moment().format('DD-MMMM-YYYY');

      var modalInstance = $modal.open({
        templateUrl: 'tpl/product/modal.form.stock.html',
        controller: 'ProductModalInstanceCtrl',
        size: 'lg',
        resolve: {
          item: function () {
            return $scope.item;
          }
        }
      });
      modalInstance.result.then(function () {
        $scope.item.amountCurrent = $scope.item.amountStart;
        Product.productStocks.create(
          {id: $scope.product.id},
          $scope.item,
          function (result) {
            $scope.productStocks.push(result);
            $scope.item = {};
            toaster.pop('success', '', 'Stock added successfully');
            $scope.getDefaultStock();
          },
          function (error) {
            toaster.pop('error', '', 'Failed to add an stock!');
          }
        );
      });
    };

    // remove stock
    $scope.removeStock = function (row) {
      var modalInstance = $modal.open({
        templateUrl: 'tpl/product/modal.delete.stock.html',
        controller: 'ProductModalInstanceCtrl',
        size: 'lg',
        resolve: {
          item: function () {
            return row;
          }
        }
      });
      modalInstance.result.then(function () {
        Product.productStocks.destroyById(
          { id: row.productId,
            fk: row.id },
          function () {
            var index = $scope.productStocks.indexOf(row);
            if (index !== -1) {
              $scope.productStocks.splice(index, 1);
              toaster.pop('success', '', 'Item deleted successfully');
              $scope.getDefaultStock();
            }
          },
          function (error) {
            toaster.pop('error', '', 'Failed to delete item!');
          }
        );
      });
    };

    // toggle stock 'active' status
    $scope.toggleStockStatus = function (row) {
      var modalInstance = $modal.open({
        templateUrl: 'tpl/product/modal.toggle.stock.html',
        controller: 'ProductModalInstanceCtrl',
        size: 'lg',
        resolve: {
          item: function () {
            return row;
          }
        }
      });
      modalInstance.result.then(function () {
        // switch status logic
        if (row.active) {
          row.active = false;
        } else {
          row.active = true;
        }
        Product.productStocks.updateById(
          { id: row.productId,
            fk: row.id },
          {active: row.active},
          function () {
            var index = $scope.productStocks.indexOf(row);
            if (index !== -1) {
              $scope.productStocks[index].active = row.active;
              toaster.pop('success', '', 'Stock status updated');
              $scope.getDefaultStock();
            }
          },
          function (error) {
            var index = $scope.productStocks.indexOf(row);
            if (index !== -1) {
              $scope.productStocks[index].active = !row.active;
              toaster.pop('error', '', 'Stock status not updated!');
            }
          }
        );
      });
    };



  }]);

app.controller('ProductModalInstanceCtrl', ['$scope', '$modalInstance', 'item',
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
