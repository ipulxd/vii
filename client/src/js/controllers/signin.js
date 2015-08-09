'use strict';

/* Controllers */
  // signin controller
app.controller('SigninFormController', ['$scope', 'AuthService', '$state',
  function($scope, AuthService, $state) {
    // clear user session
    // TODO: membuat pesan logged out
    //AuthService.logout();
    //console.log(currentUser);
    var current = AuthService.getCurrentUser();
    console.log(current);
    $scope.authError = current;


    $scope.authError = null;
    $scope.login = function() {
      $scope.authError = null;
      // Try to login
      AuthService.login($scope.user.email, $scope.user.password)
      .then(function() {
          $state.go('app.dashboard-v1');
      }, function() {
          $scope.authError = 'Invalid email or password!';
      });
    };
  }]
);
