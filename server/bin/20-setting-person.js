var path = require('path');
var app = require(path.resolve(__dirname, '../server'));
var dataSource = app.dataSources.postgreDs;
var Person = dataSource.models.Person;

var people = [
  {email: 'admin@panganmas.co.id', password: 'admin212', firstname: 'Admin', lastname: 'User'},
  {email: 'sales@panganmas.co.id', password: 'sales212', firstname: 'Sales', lastname: 'User'}
];

var count = people.length;

people.forEach(function (person) {
  Person.findOrCreate({where: {email: person.email}}, person, function (err, instance) {
    if (err) return console.log(err);

    console.log('Person created: ', instance);

    count--;
    if (count === 0) console.log('Done [people]');
  });
});
