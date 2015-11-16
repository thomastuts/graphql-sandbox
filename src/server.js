import express from 'express';
import graphql from 'graphql';
import expressGraphql from 'express-graphql';
import Schema from './schema/schema';

const connectionInfo = require('../knexfile').development;
export const knex = require('knex')(connectionInfo);

const app = express();

app.use('/', expressGraphql({
  schema: Schema,
  graphiql: true
}));

app.listen(process.env.API_PORT);
console.log('GraphQL server running on port', process.env.API_PORT);
