/**
 * Created by saiful.
 */
app.controller('VACLCtrl', ['$scope', 'VACL', '$modal', 'toaster',
  function($scope, VACL, $modal, toaster) {

    //  pagination
    $scope.itemsByPage=10;

    // index
    //$scope.ACLs = VACL.find({filter: {where: {principalId: {neq: 'SysEng'}}}});
    $scope.ACLs = VACL.find();
    $scope.displayACLs = [].concat($scope.ACLs);

    // add
    $scope.acl = {};
    $scope.add = function () {
      var modalInstance = $modal.open({
        templateUrl: 'tpl/vacl/modal.form.html',
        controller: 'VACLModalInstanceCtrl',
        size: 'lg',
        resolve: {
          item: function () {
            return $scope.acl;
          }
        }
      });
      modalInstance.result.then(function () {
        VACL.create(
          {},
          $scope.acl,
          function (res) {
            $scope.ACLs.push(res);
            $scope.acl = {};
            toaster.pop('success', '', 'Permission added successfully');
          },
          function (error) {
            toaster.pop('error', '', 'Failed to add permission!');
          }
        );
      });
    };

    // edit
    $scope.edit = function (row) {
      var modalInstance = $modal.open({
        templateUrl: 'tpl/vacl/modal.form.html',
        controller: 'VACLModalInstanceCtrl',
        size: 'lg',
        resolve: {
          item: function () {
            return row;
          }
        }
      });

      modalInstance.result.then(function (item) {

        VACL.update(
          {where: {id: row.id}},
          item,
          function (res) {
            var index = $scope.ACLs.indexOf(row);
            if (index !== -1) {
              $scope.ACLs[index]=res;
            }
            $scope.acl = {};
            toaster.pop('success', '', 'Permission updated successfully');
          },
          function (error) {
            toaster.pop('error', '', 'Failed to update permission!');
          }
        );
      });

    };

    //remove
    $scope.remove = function (row) {
      var modalInstance = $modal.open({
        templateUrl: 'tpl/vacl/modal.delete.html',
        controller: 'VACLModalInstanceCtrl',
        size: 'lg',
        resolve: {
          item: function () {
            return row;
          }
        }
      });
      modalInstance.result.then(function () {
        VACL.deleteById(
          { id: row.id },
          function () {
            var index = $scope.ACLs.indexOf(row);
            if (index !== -1) {
              $scope.ACLs.splice(index, 1);
              toaster.pop('success', '', 'Permission deleted successfully');
            }
          },
          function (error) {
            toaster.pop('error', '', 'Failed to delete permission!');
          }
        );
      });
    };

  }]);

app.controller('VACLModalInstanceCtrl', ['$scope', '$modalInstance', 'item',
  function($scope, $modalInstance, item) {
    $scope.item = item;

    $scope.ok = function () {
      $modalInstance.close($scope.item);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }]);
