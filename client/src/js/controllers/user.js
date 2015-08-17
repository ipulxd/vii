/**
 * Created by saiful.
 */
app.controller('UserIndexCtrl', ['$scope', 'Person', 'VRoleMapping', '$modal', 'toaster',
  function($scope, Person, VRoleMapping, $modal, toaster) {

    //  pagination
    $scope.itemsByPage=10;

    // index
    $scope.users = Person.find({filter:{where: {email: {neq: 'saiful.anwar@gmail.com'}}}});
    $scope.displayUsers = [].concat($scope.users);


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
        VRoleMapping.find({
          filter: {
            where: {
              and: [{principalId: row.id}, {principalType: 'USER'}]
            },
            limit: 1
          }
        }, function (results) { // no destroy all TODO: create REST endpoint
          angular.forEach(results, function (rm) {
            VRoleMapping.deleteById({id: rm.id});
          });
        });
        Person.deleteById(
          { id: row.id },
          function () {

            var index = $scope.users.indexOf(row);
            if (index !== -1) {
              $scope.users.splice(index, 1);
              toaster.pop('success', '', 'User deleted successfully');
            }
          },
          function (error) {
            toaster.pop('error', '', 'Failed to delete user!');
          }
        );
      });
    };

  }]);


app.controller('UserNewCtrl', ['$scope', 'Person', 'VRole', 'VRoleMapping', '$modal', 'toaster', '$state',
  function($scope, Person, VRole, VRoleMapping, $modal, toaster, $state) {

    $scope.addUser = function () {

      Person.create(
        {},
        $scope.user,
        function (user) {
          if ($scope.user.group) {
            VRoleMapping.create(
              {},
              {
                principalType: 'USER',
                principalId: user.id,
                roleId: $scope.user.group
              },
              function() {
                toaster.pop('success', '', 'User added successfully');
                $state.go('app.setting.user');
              },
              function () {
                toaster.pop('warning', '', 'User added but failed to assign group');
                $state.go('app.setting.user');
              }
            );
          }
        },
        function (error) {
          toaster.pop('error', '', 'Failed to add a user!');
        }
      );

    };

    // init
    $scope.user = new Person();

    // user groups
    VRole.find(
      {filter: {where: {name: {neq: 'SysEng'}}}},
      function (roles) {
        $scope.user.roleOptions = roles;
      }
    );

  }]);


app.controller('UserEditCtrl', ['$scope', 'Person', 'VRole', 'VRoleMapping', '$modal', 'toaster', '$state', '$stateParams',
  function($scope, Person, VRole, VRoleMapping, $modal, toaster, $state, $stateParams) {

    // init
    $scope.user = {};
    Person.findById({id: $stateParams.id}, function (user) {
      $scope.user = user;
      // selected group
      VRoleMapping.find({
        filter: {
          where: {
            and: [{principalType: 'USER'}, {principalId: user.id}]
          },
          limit: 1
        }
      }, function (rm) {
        if (rm.length)
          $scope.user.group = rm[0].roleId;
        else
          $scope.user.group = null;
      });
    });

    // user groups
    VRole.find(
      {filter: {where: {name: {neq: 'SysEng'}}}},
      function (roles) {
        $scope.user.roleOptions = roles;
      }
    );

    $scope.updateUser = function () {

      Person.update(
        {where: {id: $stateParams.id}},
        $scope.user,
        function (user) {
          if ($scope.user.group) {
            VRoleMapping.find({
              filter: {
                where: {
                  and: [{principalId: user.id}, {principalType: 'USER'}]
                },
                limit: 1
              }
            },
            function (rm) {
              if (rm.length) {
                VRoleMapping.update({
                    where: {
                      and: [{principalId: user.id}, {principalType: 'USER'}]
                    }
                  },
                  {roleId: $scope.user.group},
                  function() {
                    toaster.pop('success', '', 'User updated successfully');
                    $state.go('app.setting.user');
                  },
                  function () {
                    toaster.pop('warning', '', 'User update but failed to update group');
                    $state.go('app.setting.user');
                  }
                );
              } else {
                VRoleMapping.create(
                  {},
                  {
                    principalType: 'USER',
                    principalId: user.id,
                    roleId: $scope.user.group
                  },
                  function() {
                    toaster.pop('success', '', 'User updated successfully');
                    $state.go('app.setting.user');
                  },
                  function () {
                    toaster.pop('warning', '', 'User updated but failed to assign group');
                    $state.go('app.setting.user');
                  }
                );
              }

            });
          }
        },
        function (error) {
          toaster.pop('error', '', 'Failed to update user!');
        }
      );

    };

  }]);


app.controller('UserPasswdCtrl', ['$scope', 'Person', 'toaster', '$state', '$stateParams',
  function($scope, Person, toaster, $state, $stateParams) {

    // init
    $scope.user = {};
    Person.findById({id: $stateParams.id}, function (user) {
      $scope.user = user;
    });

    $scope.updatePassword = function () {

      Person.updatePassword(
        {},
        {id: $stateParams.id, password: $scope.user.newPassword},
        function() {
          toaster.pop('success', '', 'Password updated successfully');
          $state.go('app.setting.user');
        },
        function () {
          toaster.pop('error', '', 'Failed to update password');
        }
      );
      //
      //Person.update(
      //  {where: {id: $stateParams.id}},
      //  {password: $scope.user.newPassword},
      //  function() {
      //    toaster.pop('success', '', 'Password updated successfully');
      //    $state.go('app.setting.user');
      //  },
      //  function () {
      //    toaster.pop('error', '', 'Failed to update password');
      //  }
      //);

      //console.log($scope.user);
      //$scope.user.hasPassword($scope.user.current_password, function (err, isMatch) {
      //  if (err) return err;
      //  else {
      //    console.log($scope.user);
      //  }
      //});

    }

  }]);

app.controller('UserModalInstanceCtrl', ['$scope', '$modalInstance', 'item',
  function($scope, $modalInstance, item) {
    $scope.item = item;

    $scope.ok = function () {
      $modalInstance.close($scope.id);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }]);
