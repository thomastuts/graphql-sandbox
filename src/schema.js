import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

const connectionInfo = require('../knexfile').development;
const knex = require('knex')(connectionInfo);

const User = new GraphQLObjectType({
  name: 'User',
  description: 'Represents a user.',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLInt)},
    username: {type: new GraphQLNonNull(GraphQLString)}
  })
});

const Query = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    users: {
      type: new GraphQLList(User),
      resolve: (rootValue, args, info) => {
        let fieldASTs = info.fieldASTs;
        let fields = fieldASTs[0].selectionSet.selections.map(selection => selection.name.value);
        return knex.select(fields).from('users');
      }
    }
  })
});

const Schema = new GraphQLSchema({
  query: Query
});

export default Schema;
