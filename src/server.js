import express from 'express';
import bodyParser from 'body-parser';
import graphql from 'graphql';
import expressGraphql from 'express-graphql';
import Schema from './schema/schema';
import {verifyCredentials, generateJwtTokenForUser, addUserToRequest} from './security/authentication';

const connectionInfo = require('../knexfile').development;
export const knex = require('knex')(connectionInfo);

const app = express();

app.use(bodyParser.json());

app.post('/login', function (req, res) {
  verifyCredentials(req.body.username, req.body.password).then(function (user) {
    res.json({
      token: generateJwtTokenForUser(user)
    });
  });
});

app.use('/', [addUserToRequest], expressGraphql(req => {
  return {
    schema: Schema,
    rootValue: {user: req.user},
    graphiql: true
  };
}));

app.listen(process.env.API_PORT);
console.log('GraphQL server running on port', process.env.API_PORT);
