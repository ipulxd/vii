/**
 * Created by saiful.
 */
app.controller('CurrencyCtrl', ['$scope', 'Currency', '$modal', 'toaster',
  function($scope, Currency, $modal, toaster) {
    $scope.currencies = Currency.find();
    $scope.displayCurrencies = [].concat($scope.currencies);

    // add
    $scope.currency = {};
    $scope.add = function () {
      var modalInstance = $modal.open({
        templateUrl: 'tpl/currency/modal.form.html',
        controller: 'CurrencyModalInstanceCtrl',
        size: 'lg',
        resolve: {
          currency: function () {
            return $scope.currency;
          }
        }
      });
      modalInstance.result.then(function () {
        Currency.create(
          {},
          $scope.currency,
          function (result) {
            $scope.currencies.push(result);
            $scope.currency = {};
            toaster.pop('success', '', 'Item added successfully');
          },
          function (error) {
            toaster.pop('error', '', 'Currency to add an item!');
          }
        );
      });
    };

    /*
     Edit forbidden for now
     Solution: delete & create new
     But delete wont work if foreign key used
     ON UPDATE NO ACTION ON DELETE NO ACTION
    */
    // remove
    $scope.remove = function (row) {
      var modalInstance = $modal.open({
        templateUrl: 'tpl/currency/modal.delete.html',
        controller: 'CurrencyModalInstanceCtrl',
        size: 'lg',
        resolve: {
          currency: function () {
            return row;
          }
        }
      });
      modalInstance.result.then(function () {
        Currency.deleteById(
          { id: row.code },
          function () {
            var index = $scope.currencies.indexOf(row);
            if (index !== -1) {
              $scope.currencies.splice(index, 1);
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

app.controller('CurrencyModalInstanceCtrl', ['$scope', '$modalInstance', 'currency',
  function($scope, $modalInstance, currency) {
    $scope.currency = currency;

    $scope.ok = function () {
      $modalInstance.close($scope.name);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }]);
