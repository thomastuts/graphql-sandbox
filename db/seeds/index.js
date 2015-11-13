var connectionInfo = require('../../knexfile').development;
var knex = require('knex')(connectionInfo);
var users = require('./users');
var posts = require('./posts');

console.log('Seeding database...');

// TODO: get rid of this promise chaining, it's just awful
users.seed(knex).then(function () {
  posts.seed(knex).then(function () {
    console.log('Seeding done!');
    process.exit(0);
  });
});
