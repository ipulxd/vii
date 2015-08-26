'use strict';

/* Controllers */
  // signin controller
app.controller('SigninFormController', ['$rootScope', '$scope', 'AuthService', '$state',
  function($rootScope, $scope, AuthService, $state) {
    // clear user session

    if (AuthService.isLoggedIn()) {
      AuthService.logout().then(
        function () {
          $scope.authError = 'Successfully logged out';
        },
        function () {
          $scope.authError = 'Failed to log out';
        }
      );
    }

    $scope.authError = null;
    $scope.login = function() {
      $scope.authError = null;
      // Try to login
      AuthService.login($scope.user.email, $scope.user.password)
      .then(function() {
          AuthService.getCurrentUser();
          $state.go('app.dashboard-v1');
      }, function() {
          $scope.authError = 'Invalid email or password!';
      });
    };
  }]
);
