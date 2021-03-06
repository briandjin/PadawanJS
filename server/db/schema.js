var dummyData = require('./dummyData.js')

module.exports = function(db) {
  return db.knex.schema.hasTable('mentors').then(function(exists) {
    if (!exists) {
      db.knex.schema.createTable('mentors', function(mentor) {
        mentor.increments('id').primary();
        mentor.string('name');
        mentor.string('location');
        mentor.string('picture');
        mentor.boolean('react');
        mentor.boolean('angular');
        mentor.boolean('backbone');
        mentor.boolean('express');
        mentor.boolean('redux');
        mentor.boolean('authorization');
        mentor.boolean('TDD');
        mentor.boolean('mocha/chai');
        mentor.boolean('react native');
        mentor.boolean('node');
      }).then(function(table) {
        console.log('Created table!', table);
      }).then(function() {
        return db.knex('mentors').insert(dummyData);
      }).catch(function(err) {
        console.log('Error creating table', err);
      })
    }
  });
}
