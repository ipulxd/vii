/**
 * Created by saiful.
 */
app.controller('OrderMethodCtrl', ['$scope', 'OrderMethod', '$modal', 'toaster',
  function($scope, OrderMethod, $modal, toaster) {
    $scope.orderMethods = OrderMethod.find();
    $scope.displayOrderMethods = [].concat($scope.orderMethods);

    // add method
    $scope.methods = {};
    $scope.add = function () {
      var modalInstance = $modal.open({
        templateUrl: 'tpl/ordermethod/modal.form.html',
        controller: 'OrderModalInstanceCtrl',
        size: 'lg',
        resolve: {
          methods: function () {
            return $scope.methods;
          }
        }
      });
      modalInstance.result.then(function () {
        OrderMethod.create(
          {},
          $scope.methods,
          function () {
            $scope.orderMethods.push($scope.methods);
            $scope.methods = {};
            toaster.pop('success', '', 'Item added successfully');
          },
          function (error) {
            toaster.pop('error', '', 'Failed to add an item!');
          }
        );
      });
    };

    /*
     Edit method forbidden for an id, method.name is an id
     Solution: delete & create new
     But delete wont work if foreign key used
     ON UPDATE NO ACTION ON DELETE NO ACTION
    */
    // remove method
    $scope.remove = function (row) {
      var modalInstance = $modal.open({
        templateUrl: 'tpl/ordermethod/modal.delete.html',
        controller: 'OrderModalInstanceCtrl',
        size: 'lg',
        resolve: {
          methods: function () {
            return row;
          }
        }
      });
      modalInstance.result.then(function () {
        OrderMethod.deleteById(
          { id: row.name },
          function () {
            var index = $scope.orderMethods.indexOf(row);
            if (index !== -1) {
              $scope.orderMethods.splice(index, 1);
              toaster.pop('success', '', 'Item deleted successfully');
            }
          },
          function (error) {
            toaster.pop('error', '', 'Failed to delete item!');
          }
        );
      });
    };

  }]);

app.controller('OrderModalInstanceCtrl', ['$scope', '$modalInstance', 'methods',
  function($scope, $modalInstance, methods) {
    $scope.methods = methods;

    $scope.ok = function () {
      $modalInstance.close($scope.name);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }]);
