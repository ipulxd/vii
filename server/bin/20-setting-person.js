'use strict';

var path = require('path');
var app = require(path.resolve(__dirname, '../server'));
var dataSource = app.dataSources.postgreDs;
var Person = dataSource.models.Person;
var VRole = dataSource.models.VRole;
var VRoleMapping = dataSource.models.VRoleMapping;

var defaultUsers = [
  {email: 'sales@panganmas.co.id', password: 'sales212', firstname: 'Sales', lastname: 'User'},
  {email: 'manager@panganmas.co.id', password: 'manager212', firstname: 'Manager', lastname: 'User'},
  {email: 'admin@panganmas.co.id', password: 'admin212', firstname: 'Admin', lastname: 'User'},
  {email: 'saiful.anwar@gmail.com', password: 'saiful212', firstname: 'Saiful', lastname: 'Anwar'}
];

var defaultRoles = [
  {name: 'Sales', description: 'Sales'},
  {name: 'SalesManager', description: 'Sales Managers'},
  {name: 'Administrator', description: 'Administrator'},
  {name: 'SysEng', description: 'System Engineer'}
];

Person.create(defaultUsers, function (err, users) {
  if (err) cb(err);
  VRole.create(defaultRoles, function (err, roles) {
    if (err) cb(err);

    // map default role to user
    // user 0 to role 0
    roles[0].principals.create({
      principalType: VRoleMapping.USER,
      principalId: users[0].id
    }, function(err, principal) {
      if (err) cb(err);
    });
    // user 1 to role 1
    roles[1].principals.create({
      principalType: VRoleMapping.USER,
      principalId: users[1].id
    }, function(err, principal) {
      if (err) cb(err);
    });
    // user 2 to role 2
    roles[2].principals.create({
      principalType: VRoleMapping.USER,
      principalId: users[2].id
    }, function(err, principal) {
      if (err) cb(err);
    });
    // user 3 to role 3
    roles[3].principals.create({
      principalType: VRoleMapping.USER,
      principalId: users[3].id
    }, function(err, principal) {
      if (err) cb(err);
    });

  });
});

//var count = people.length;
//
//people.forEach(function (person) {
//  Person.findOrCreate({where: {email: person.email}}, person, function (err, instance) {
//    if (err) return console.log(err);
//
//    console.log('Person created: ', instance);
//
//    count--;
//    if (count === 0) {
//      console.log('Done [people]');
//      // test login
//      //Person.login({
//      //  email: 'admin@panganmas.co.id',
//      //  password: 'admin212'
//      //}, function (err, token) {
//      //  console.log(token);
//      //});
//    }
//  });
//});

