exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('tags', function (table) {
      table.increments().primary();
      table.string('name').notNullable();
      table.timestamps();
    }),
    knex.schema.createTable('posts_tags', function (table) {
      table.integer('post_id').notNullable().references('id').inTable('posts');
      table.integer('tag_id').notNullable().references('id').inTable('tags');
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('posts_tags'),
    knex.schema.dropTable('tags')
  ]);
};
