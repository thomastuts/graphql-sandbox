exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function (table) {
    table.increments().primary();
    table.integer('author_id').notNullable().references('id').inTable('users');
    table.integer('post_id').notNullable().references('id').inTable('posts');
    table.string('content').notNullable();
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
