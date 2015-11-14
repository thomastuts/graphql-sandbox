var connectionInfo = require('../../knexfile').development;
var knex = require('knex')(connectionInfo);
var users = require('./users');
var posts = require('./posts');
var tags = require('./tags');
var postsTags = require('./posts-tags');

console.log('Seeding database...');

async function seedDatabase() {
  try {
    await users.seed(knex);
    await posts.seed(knex);
    await tags.seed(knex);
    await postsTags.seed(knex);
    console.log('Done seeding!');
    process.exit(0);
  }
  catch (e) {
    console.log('Error during seeding:');
    console.log(e);
    process.exit(1);
  }
}

seedDatabase();
