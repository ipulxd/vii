/**
 * Created by saiful.
 */
app.controller('PaymentMethodCtrl', ['$scope', 'PaymentMethod', '$modal', 'toaster',
  function($scope, PaymentMethod, $modal, toaster) {
    $scope.paymentMethods = PaymentMethod.find();
    $scope.displayPaymentMethods = [].concat($scope.paymentMethods);

    // add method
    $scope.methods = {};
    $scope.add = function () {
      var modalInstance = $modal.open({
        templateUrl: 'tpl/paymentmethod/modal.form.html',
        controller: 'PaymentModalInstanceCtrl',
        size: 'lg',
        resolve: {
          methods: function () {
            return $scope.methods;
          }
        }
      });
      modalInstance.result.then(function () {
        PaymentMethod.create(
          {},
          $scope.methods,
          function () {
            $scope.paymentMethods.push($scope.methods);
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
        templateUrl: 'tpl/paymentmethod/modal.delete.html',
        controller: 'PaymentModalInstanceCtrl',
        size: 'lg',
        resolve: {
          methods: function () {
            return row;
          }
        }
      });
      modalInstance.result.then(function () {
        PaymentMethod.deleteById(
          { id: row.name },
          function () {
            var index = $scope.paymentMethods.indexOf(row);
            if (index !== -1) {
              $scope.paymentMethods.splice(index, 1);
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

app.controller('PaymentModalInstanceCtrl', ['$scope', '$modalInstance', 'methods',
  function($scope, $modalInstance, methods) {
    $scope.methods = methods;

    $scope.ok = function () {
      $modalInstance.close($scope.name);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }]);
