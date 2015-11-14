exports.up = function(knex) {
  return knex.schema.createTable('posts', function (table) {
    table.increments().primary();
    table.integer('author_id').notNullable().references('id').inTable('users');
    table.string('title').notNullable();
    table.text('content').notNullable();
    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};
