/**
 * Created by saiful.
 */
app.controller('SOGroupIndexCtrl', ['$scope', 'SOGroup', '$modal', 'toaster',
  function($scope, SOGroup, $modal, toaster) {

    //  pagination
    $scope.itemsByPage=10;

    // index
    $scope.soGroups = [];
    SOGroup.find({
        //filter: {
        //  include: {
        //    relation: 'orders',
        //    scope: {
        //      include: {
        //        relation: 'customer',
        //        scope: {
        //          fields: ['name']
        //        }
        //      }
        //    }
        //  }
        //}
      }, function (result) {
      $scope.soGroups = result;
      $scope.displaySOGroups = [].concat($scope.soGroups);
    });

    // remove
    $scope.remove = function (row) {
      var modalInstance = $modal.open({
        templateUrl: 'tpl/sogroup/modal.delete.html',
        controller: 'SOGroupModalInstanceCtrl',
        size: 'lg',
        resolve: {
          item: function () {
            return row;
          }
        }
      });
      modalInstance.result.then(function () {
        SOGroup.deleteById(
          { id: row.id },
          function () {
            var index = $scope.soGroups.indexOf(row);
            if (index !== -1) {
              $scope.soGroups.splice(index, 1);
              toaster.pop('success', '', 'SO Group berhasil dihapus');
            }
          },
          function (error) {
            toaster.pop('error', '', 'SO Group gagal dihapus! Silakan hapus order terkait terlebih dahulu');
          }
        );
      });
    };

  }]);

app.controller('SOGroupNewCtrl', ['$scope', '$rootScope', 'SOGroup', 'Currency', '$state', 'toaster',
  function ($scope, $rootScope, SOGroup, Currency, $state, toaster) {

    // init
    $scope.soGroup = new SOGroup();

    Currency.find(
      function (result) {
        $scope.soGroup.currencies = result;
        $scope.soGroup.currencyCode = 'Rp';
      }
    );

    $scope.soGroup.maxLimit = 600000000;

    $scope.addSOGroup = function () {
      // Get user id
      $scope.soGroup.personId = $rootScope.currentUser.id;
      SOGroup.create(
        {},
        $scope.soGroup,
        function (result) {
          toaster.pop('success', '', 'SO Group '+result.name+' berhasil ditambahkan.');
          $state.go('app.sogroup.list');
        },
        function (error) {
          toaster.pop('error', '', 'SO Group gagal ditambahkan!');
        }
      );
    };

  }]);

app.controller('SOGroupEditCtrl', ['$scope', 'SOGroup', 'Currency', '$state', '$stateParams', 'toaster',
  function ($scope, SOGroup, Currency, $state, $stateParams, toaster) {

    // get current so group
    SOGroup.findById({ id: $stateParams.id }, function (result) {
      $scope.soGroup = result;
      $scope.soGroup.maxLimit = Number(result.maxLimit);
    });

    Currency.find(
      function (result) {
        $scope.soGroup.currencies = result;
      }
    );

    // update
    $scope.updateSOGroup = function () {
      SOGroup.update(
        { where: {id: $stateParams.id } },
        $scope.soGroup,
        function () {
          toaster.pop('success', '', 'SO Group berhasil diperbarui');
          $state.go('app.sogroup.list');
        },
        function (error) {
          toaster.pop('error', '', 'SO Group gagal diperbarui!');
        }
      );
    };

  }]);

app.controller('OrderGroupDetailCtrl', ['$scope', 'Order', 'OrderGroup', '$state',
  '$stateParams', '$modal', 'toaster', '$filter',
  function ($scope, Order, OrderGroup, $state, $stateParams, $modal, toaster, $filter) {

    //  pagination
    $scope.itemsByPage=10;

    // defaults
    $scope.orderGroup = {};
    $scope.item = {};
    $scope.item.orders = [];
    $scope.orderGroup.displayOrders = [].concat($scope.item.orders);
    $scope.item.availableOrders = [];

    OrderGroup.findById({
      id: $stateParams.id,
      filter: {
        include: {
          relation: 'orders',
          scope: {
            include: {
              relation: 'customer',
              scope: {
                fields: ['name']
              }
            }
          }
        }
      }
    }, function (result) {
      $scope.orderGroup = result;
      $scope.item.orders = result.orders;
      $scope.orderGroup.displayOrders = [].concat($scope.item.orders);
      $scope.item.orderGroup = $scope.orderGroup;
    });

    $scope.getAvailableOrders = function () {
      if ($scope.item.availableOrders.length < 1) { // check whether loaded or not
        Order.find({
          filter: {
            include: 'customer',
            where: {
              or: [{orderGroupId: null}, {orderGroupId: ''}]
            },
            order: [ 'datePurchase ASC' ]
          }
        }, function (result) {
          $scope.item.availableOrders = result;
        });
      }
    };
    $scope.getAvailableOrders(); // init

    // add order
    $scope.addOrder = function () {
      var modalInstance = $modal.open({
        templateUrl: 'tpl/ordergroup/modal.form.order.html',
        controller: 'OrderGroupModalInstanceCtrl',
        size: 'lg',
        resolve: {
          item: function () {
            return $scope.item;
          }
        }
      });
      modalInstance.result.then(function () {
        Order.update({
            where: {id: {inq: $scope.item.selectedOrdersId}}
          },
          { orderGroupId: $scope.item.orderGroup.id },
          function () {
            toaster.pop('success', '', 'Group member added successfully');

            Order.find({
              filter: {
                include: 'customer',
                where: {id: {inq: $scope.item.selectedOrdersId}}
              }
            }, function (result) {
              angular.forEach(result, function(order) {
                $scope.orderGroup.orders.push(order);
              });
            }, function () {
              toaster.pop('success', '', 'Group member added successfully. Please refresh this page');
            });
          },
          function () {
            toaster.pop('error', '', 'Failed to add a group member!');
          }
        );
      });
    };

    // remove item
    $scope.removeOrder = function (row) {
      var modalInstance = $modal.open({
        templateUrl: 'tpl/ordergroup/modal.delete.order.html',
        controller: 'OrderGroupModalInstanceCtrl',
        size: 'lg',
        resolve: {
          item: function () {
            return row;
          }
        }
      });
      modalInstance.result.then(function () {
        Order.update({
            where: {id: row.id}
          },
          { orderGroupId: null },
          function () {
            var index = $scope.item.orders.indexOf(row);
            if (index !== -1) {
              $scope.item.orders.splice(index, 1);
              toaster.pop('success', '', 'Order removed successfully from group');
            }
          },
          function () {
            toaster.pop('error', '', 'Failed to remove order from group!');
          }
        );
      });
    };
  }]);

app.controller('SOGroupModalInstanceCtrl', ['$scope', '$modalInstance', 'item',
  function($scope, $modalInstance, item) {
    $scope.item = item;

    $scope.ok = function () {
      $modalInstance.close($scope.id);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }]);
