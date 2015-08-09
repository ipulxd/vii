/**
 * Created by saiful.
 */
app.controller('CustomerIndexCtrl', ['$scope', 'Customer', '$modal', 'toaster',
  function($scope, Customer, $modal, toaster) {

    //  pagination
    $scope.itemsByPage=10;

    // index
    $scope.customers = Customer.find();
    $scope.displayCustomers = [].concat($scope.customers);

    // remove
    $scope.remove = function (row) {
      var modalInstance = $modal.open({
        templateUrl: 'tpl/customer/modal.delete.html',
        controller: 'ModalInstanceCtrl',
        size: 'lg',
        resolve: {
          customer: function () {
            return row;
          }
        }
      });
      modalInstance.result.then(function () {
        Customer.deleteById(
          { id: row.id },
          function () {
            var index = $scope.customers.indexOf(row);
            if (index !== -1) {
              $scope.customers.splice(index, 1);
              toaster.pop('success', '', 'Customer deleted successfully');
            }
          },
          function (error) {
            toaster.pop('error', '', 'Failed to delete customer!');
          }
        );
      });
    };

  }]);

app.controller('CustomerNewCtrl', ['$scope', 'Customer', '$state', 'toaster',
  function ($scope, Customer, $state, toaster) {
    // get all customer where isGroup = true
    $scope.groupCustomers = Customer.find({
      filter: {
        where: {
          and: [
            { isGroup: true },
            { active: true }
          ]
        }
      }
    });

    $scope.addCustomer = function () {

      Customer.create(
        {},
        $scope.customer,
        function () {
          toaster.pop('success', '', 'Customer added successfully');
          $state.go('app.customer.list');
        },
        function (error) {
          toaster.pop('error', '', 'Failed to add a customer!');
        }
      );

    };

    // init
    $scope.customer = new Customer();

    // default values
    $scope.customer.isGroup = false;
    $scope.customer.active = true;

  }]);

app.controller('CustomerEditCtrl', ['$scope', 'Customer', '$state', '$stateParams', 'toaster',
  function ($scope, Customer, $state, $stateParams, toaster) {

    // get all customer where isGroup = true
    $scope.groupCustomers = Customer.find({
      filter: {
        where: {
          and: [
            { isGroup: true },
            { active: true }
          ]
        }
      }
    });

    // get current customer
    $scope.customer = Customer.findById( { id: $stateParams.id } );

    // update
    $scope.updateCustomer = function () {

      if (angular.isUndefined($scope.customer.parentId))
        $scope.customer.parentId = null;

      Customer.update(
        { where: {id: $stateParams.id } },
        $scope.customer,
        function () {
          toaster.pop('success', '', 'Customer updated successfully');
          $state.go('app.customer.list');
        },
        function (error) {
          toaster.pop('error', '', 'Failed to update customer!');
        }
      );

    };

  }]);

app.controller('ModalInstanceCtrl', ['$scope', '$modalInstance', 'customer',
  function($scope, $modalInstance, customer) {
    $scope.customer = customer;

    $scope.ok = function () {
      $modalInstance.close($scope.id);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }]);

