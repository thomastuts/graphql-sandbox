import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import {knex} from '../../server';

import postType from './post';

const userType = new GraphQLObjectType({
  name: 'User',
  description: 'Represents a user.',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLInt)},
    username: {type: new GraphQLNonNull(GraphQLString)},
    posts: {
      type: new GraphQLList(postType),
      resolve: (user) => knex.select().from('posts').where({author_id: user.id})
    }
  })
});

export default userType;
