exports.clean = function (knex) {
  return knex('posts_tags').del();
};

exports.seed = function (knex) {
  return knex('posts_tags').insert([
    {
      "post_id": 1,
      "tag_id": 1
    },
    {
      "post_id": 1,
      "tag_id": 2
    },
    {
      "post_id": 3,
      "tag_id": 1
    },
    {
      "post_id": 3,
      "tag_id": 2
    },
    {
      "post_id": 3,
      "tag_id": 4
    },
    {
      "post_id": 5,
      "tag_id": 3
    }
  ]);
};
