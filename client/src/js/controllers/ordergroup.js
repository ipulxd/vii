/**
 * Created by saiful.
 */
app.controller('OrderGroupIndexCtrl', ['$scope', 'OrderGroup', '$modal', 'toaster',
  function($scope, OrderGroup, $modal, toaster) {

    //  pagination
    $scope.itemsByPage=10;

    // index
    $scope.orderGroups = [];
    OrderGroup.find({
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
      $scope.orderGroups = result;
      $scope.displayOrderGroups = [].concat($scope.orderGroups);
    });

    // remove
    $scope.remove = function (row) {
      var modalInstance = $modal.open({
        templateUrl: 'tpl/ordergroup/modal.delete.html',
        controller: 'OrderGroupModalInstanceCtrl',
        size: 'lg',
        resolve: {
          item: function () {
            return row;
          }
        }
      });
      modalInstance.result.then(function () {
        OrderGroup.deleteById(
          { id: row.id },
          function () {
            var index = $scope.orderGroups.indexOf(row);
            if (index !== -1) {
              $scope.orderGroups.splice(index, 1);
              toaster.pop('success', '', 'Order group deleted successfully');
            }
          },
          function (error) {
            toaster.pop('error', '', 'Failed to delete order group! You might need to ungroup related orders first');
          }
        );
      });
    };

  }]);

app.controller('OrderGroupNewCtrl', ['$scope', 'OrderGroup', 'Order','$state', 'toaster',
  function ($scope, OrderGroup, Order, $state, toaster) {

    // init
    $scope.orderGroup = new OrderGroup();

    // find all order which not belong to any group
    $scope.availableOrders = [];
    $scope.orderGroup.selectedOrders = [];
    Order.find({
      filter: {
        include: {
          relation: 'customer',
          scope: {
            fields: ['name']
          }
        },
        where: {
          or: [{orderGroupId: null}, {orderGroupId: ''}]
        }
      }
    }, function (result) {
      $scope.availableOrders = result;
    });

    $scope.addOrderGroup = function () {
      OrderGroup.create(
        {},
        $scope.orderGroup,
        function (result) {
          if ($scope.orderGroup.selectedOrders.length) {
            // Update order
            Order.update({
                where: {id: {inq: $scope.orderGroup.selectedOrders}}
              },
              { orderGroupId: result.id },
              function () {
                toaster.pop('success', '', 'Order Group '+result.name+' added successfully, with '+
                  $scope.orderGroup.selectedOrders.length+' member');
              },
              function () {
                toaster.pop('error', '', 'Failed to add a order group!');
              }
            );
          } else {
            toaster.pop('success', '', 'Order Group '+result.name+' added successfully.');
          }
          $state.go('app.ordergroup.list');
        },
        function (error) {
          toaster.pop('error', '', 'Failed to add a order group!');
        }
      );
    };

  }]);

app.controller('OrderGroupEditCtrl', ['$scope', 'OrderGroup', '$state', '$stateParams', 'toaster',
  function ($scope, OrderGroup, $state, $stateParams, toaster) {

    // can noly edit name and note
    // get current order group
    $scope.orderGroup = OrderGroup.findById( { id: $stateParams.id } );

    // update
    $scope.updateOrderGroup = function () {
      OrderGroup.update(
        { where: {id: $stateParams.id } },
        $scope.orderGroup,
        function () {
          toaster.pop('success', '', 'Order group updated successfully');
          $state.go('app.ordergroup.list');
        },
        function (error) {
          toaster.pop('error', '', 'Failed to update order group!');
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

app.controller('OrderGroupModalInstanceCtrl', ['$scope', '$modalInstance', 'item',
  function($scope, $modalInstance, item) {
    $scope.item = item;

    $scope.ok = function () {
      $modalInstance.close($scope.id);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }]);
