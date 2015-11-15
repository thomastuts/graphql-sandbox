exports.clean = function (knex) {
  return knex('users').del();
};

exports.seed = function (knex) {
  return knex('users').insert([
    {
      "id": 1,
      "username": "meghanlivingston",
      "password": "verysecret"
    },
    {
      "id": 2,
      "username": "manningrivas",
      "password": "verysecret"
    },
    {
      "id": 3,
      "username": "anitadoyle",
      "password": "verysecret"
    },
    {
      "id": 4,
      "username": "genevievelynch",
      "password": "verysecret"
    },
    {
      "id": 5,
      "username": "gretchenvelez",
      "password": "verysecret"
    }
  ]);
};
