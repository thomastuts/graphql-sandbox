import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

const tagType = new GraphQLObjectType({
  name: 'Tag',
  description: 'Represents a tag for a post.',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLInt)},
    name: {type: new GraphQLNonNull(GraphQLString)}
  })
});

export default tagType;
