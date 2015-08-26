/**
 * Created by saiful.
 */
app.controller('CustomerIndexCtrl', ['$scope', 'Customer', 'OrderMethod', '$modal', 'toaster',
  function($scope, Customer, OrderMethod, $modal, toaster) {

    //  pagination
    $scope.itemsByPage=10;

    $scope.orderMethods = OrderMethod.find();

    // index
    Customer.find({
      filter: {
        where: { or: [{isGroup: true}, {parentId: null}, {parentId: ''}]},
        include: 'childCustomers'
      }
    }, function (result) {
      $scope.customers = result;
      $scope.displayCustomers = [].concat($scope.customers);
    });

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
              toaster.pop('success', '', 'Pelanggan berhasil dihapus');
            }
          },
          function (error) {
            toaster.pop('error', '', 'Gagal menghapus pelanggan! Pelanggan masih digunakan dalam transaksi. Untuk menonaktifkan: Edit > Non Aktif');
          }
        );
      });
    };

    // remove
    $scope.removeChild = function (row, child) {
      var modalInstance = $modal.open({
        templateUrl: 'tpl/customer/modal.delete.html',
        controller: 'ModalInstanceCtrl',
        size: 'lg',
        resolve: {
          customer: function () {
            return child;
          }
        }
      });
      modalInstance.result.then(function () {
        Customer.deleteById(
          { id: child.id },
          function () {
            var index = $scope.customers.indexOf(row);
            if (index !== -1) {
              var chd = $scope.customers[index].childCustomers.indexOf(child);
              if(chd !== -1) {
                $scope.customers[index].childCustomers.splice(index, 1);
                toaster.pop('success', '', 'Pelanggan berhasil dihapus');
              }
            }
          },
          function (error) {
            toaster.pop('error', '', 'Gagal menghapus pelanggan! Pelanggan masih digunakan dalam transaksi. Untuk menonaktifkan: Edit > Non Aktif');
          }
        );
      });
    };

  }]);

app.controller('CustomerNewCtrl', ['$scope', 'Customer', '$state', '$stateParams','toaster',
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

    // init
    $scope.customer = new Customer();

    // default values
    $scope.customer.isGroup = false;
    $scope.customer.active = true;
    $scope.customer.orderMethodName = $stateParams.type;

    $scope.addCustomer = function () {
      // proteksi
      if ($scope.customer.isGroup === true) $scope.customer.parentId = null;

      Customer.create(
        {},
        $scope.customer,
        function () {
          toaster.pop('success', '', 'Pelanggan berhasil ditambahkan');
          $state.go('app.customer.list');
        },
        function (error) {
          toaster.pop('error', '', 'Gagal menambahkan pelanggan!');
        }
      );

    };


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
          toaster.pop('success', '', 'Data pelanggan berhasil diperbarui');
          $state.go('app.customer.list');
        },
        function (error) {
          toaster.pop('error', '', 'Gagal memperbarui data pelanggan!');
        }
      );

    };

  }]);

app.controller('CustomerNewChildCtrl', ['$scope', 'Customer', '$state', '$stateParams', 'toaster',
  function ($scope, Customer, $state, $stateParams, toaster) {

    // init
    $scope.customer = new Customer();
    // default values
    $scope.customer.isGroup = false;
    $scope.customer.active = true;
    $scope.customer.orderMethodName = $stateParams.type;
    $scope.customer.parentId = $stateParams.id;

    // get parent
    Customer.findById(
      {id: $stateParams.id},
      {
        filter: {
          where: {
            and: [
              { isGroup: true },
              { active: true }
            ]
          }
        }
      }, function (result) {
        $scope.customer.parent = result;
      });

    // add
    $scope.addCustomer = function () {

      // security
      $scope.customer.isGroup = false;
      $scope.customer.parentId = $stateParams.id;

      Customer.create(
        {},
        $scope.customer,
        function () {
          toaster.pop('success', '', 'Pelanggan berhasil ditambahkan');
          $state.go('app.customer.list');
        },
        function (error) {
          toaster.pop('error', '', 'Gagal menambahkan pelanggan!');
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

