import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import {knex} from '../server';

import userType from './types/user';
import postType from './types/post';
import tagType from './types/tag';

const Query = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    users: {
      type: new GraphQLList(userType),
      resolve: (rootValue, args, info) => {
        return knex.select().from('users');
      }
    },
    posts: {
      type: new GraphQLList(postType),
      resolve: (rootValue, args, info) => {
        return knex.select().from('posts');
      }
    },
    post: {
      type: postType,
      args: {
        id: {
          description: 'ID of the post.',
          type: new GraphQLNonNull(GraphQLInt)
        }
      },
      resolve: (rootValue, args, info) => {
        return knex.select().from('posts').where({id: args.id}).first();
      }
    }
  })
});

const Schema = new GraphQLSchema({
  query: Query
});

export default Schema;
