exports.seed = function (knex) {
  return Promise.all([
    knex('tags').del(),

    knex('tags').insert([
      {
        "id": 1,
        "name": "CSS3"
      },
      {
        "id": 2,
        "name": "HTML5"
      },
      {
        "id": 3,
        "name": "JavaScript"
      },
      {
        "id": 4,
        "name": "DevOps"
      }
    ])
  ]);
};
