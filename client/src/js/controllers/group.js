/**
 * Created by saiful.
 */
app.controller('UserGroupCtrl', ['$scope', 'VRole', '$modal', 'toaster',
  function($scope, VRole, $modal, toaster) {

    //  pagination
    $scope.itemsByPage=10;

    // index
    $scope.groups = VRole.find({filter: {where: {name: {neq: 'SysEng'}}}});
    $scope.displayGroups = [].concat($scope.groups);


    //remove
    $scope.remove = function (row) {
      var modalInstance = $modal.open({
        templateUrl: 'tpl/user/modal.delete.html',
        controller: 'UserModalInstanceCtrl',
        size: 'lg',
        resolve: {
          item: function () {
            return row;
          }
        }
      });
      modalInstance.result.then(function () {
        //VRoleMapping.find({
        //  filter: {
        //    where: {
        //      and: [{principalId: row.id}, {principalType: 'USER'}]
        //    },
        //    limit: 1
        //  }
        //}, function (results) { // no destroy all TODO: create REST endpoint
        //  angular.forEach(results, function (rm) {
        //    VRoleMapping.deleteById({id: rm.id});
        //  });
        //});
        //Person.deleteById(
        //  { id: row.id },
        //  function () {
        //
        //    var index = $scope.users.indexOf(row);
        //    if (index !== -1) {
        //      $scope.users.splice(index, 1);
        //      toaster.pop('success', '', 'User deleted successfully');
        //    }
        //  },
        //  function (error) {
        //    toaster.pop('error', '', 'Failed to delete user!');
        //  }
        //);
      });
    };

  }]);

app.controller('GroupModalInstanceCtrl', ['$scope', '$modalInstance', 'item',
  function($scope, $modalInstance, item) {
    $scope.item = item;

    $scope.ok = function () {
      $modalInstance.close($scope.id);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }]);
