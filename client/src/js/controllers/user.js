/**
 * Created by saiful.
 */
app.controller('UserCtrl', ['$scope', 'Person', function($scope, Person) {
  var people = Person.find();
  console.log(people);
}]);
