import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import {knex} from '../../server';

import userType from './user';
import tagType from './tag';

const postType = new GraphQLObjectType({
  name: 'Post',
  description: 'Represents a post.',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLInt)},
    author_id: {type: new GraphQLNonNull(GraphQLInt)},
    author: {
      type: userType,
      resolve: (post) => knex.select().from('users').where({id: post.author_id}).first()
    },
    tags: {
      type: new GraphQLList(tagType),
      resolve: (post) => knex.select('name').from('tags').innerJoin('posts_tags', 'id', 'posts_tags.tag_id').where({post_id: post.id})
    },
    title: {type: new GraphQLNonNull(GraphQLString)},
    content: {type: new GraphQLNonNull(GraphQLString)}
  })
});

export default postType;
