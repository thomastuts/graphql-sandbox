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
    username: {type: new GraphQLNonNull(GraphQLString)},
    posts: {
      type: new GraphQLList(Post),
      resolve: (user) => knex.select().from('posts').where({author_id: user.id})
    }
  })
});

const Post = new GraphQLObjectType({
  name: 'Post',
  description: 'Represents a post.',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLInt)},
    author_id: {type: new GraphQLNonNull(GraphQLInt)},
    author: {
      type: User,
      resolve: (post) => knex.select().from('users').where({id: post.author_id}).first()
    },
    title: {type: new GraphQLNonNull(GraphQLString)},
    content: {type: new GraphQLNonNull(GraphQLString)}
  })
});

const Query = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    users: {
      type: new GraphQLList(User),
      resolve: (rootValue, args, info) => {
        return knex.select().from('users');
      }
    },
    posts: {
      type: new GraphQLList(Post),
      resolve: (rootValue, args, info) => {
        return knex.select().from('posts');
      }
    }
  })
});

const Schema = new GraphQLSchema({
  query: Query
});

export default Schema;
