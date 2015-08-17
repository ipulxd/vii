/**
 * Created by saiful.
 */
angular.module('lbAuth', [])
  .factory('AuthService', ['Person', 'VRoleMapping', '$q', '$rootScope',
    function(Person, VRoleMapping, $q, $rootScope) {
      function login(email, password) {
        return Person
          .login({email: email, password: password})
          .$promise
          .then(function(response) {
            $rootScope.currentUser = {
              id: response.user.id,
              tokenId: response.id,
              email: email
            };
            $rootScope.isLoggedIn = true;
          });
      }
      function logout() {
        return Person
          .logout()
          .$promise
          .then(function() {
            $rootScope.currentUser = null;
          });
      }
      function register(email, password) {
        return Person
          .create({
            email: email,
            password: password
          })
          .$promise;
      }

      function isLoggedIn() {
        return Person.isAuthenticated();
      }

      function getCurrentUser() {
        return Person.getCurrent().$promise.then(function (user) {
          $rootScope.currentUser = {
            id: user.id,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname
          };
          Person.myRole(function(result) {
            $rootScope.currentUser.role = result.role
          });
        });
      }

      function isAllowed(model, method) {
        var modelId = '*';

        return Person.isAllowed({
            model: model,
            modelId: modelId,
            method: method
          });
      }

      return {
        login: login,
        logout: logout,
        register: register,
        isLoggedIn: isLoggedIn,
        getCurrentUser: getCurrentUser,
        isAllowed: isAllowed
      };
    }]);
