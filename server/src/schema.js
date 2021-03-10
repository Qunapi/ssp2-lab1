import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} from "graphql";
import { postService } from "./services/postService";
import { userService } from "./services/userService";

// const customers = [
//   { id: 1, name: "john", email: "and", age: 4 },
//   { id: 2, name: "john1", email: "and1", age: 6 },
//   { id: 3, name: "john2", email: "and2", age: 5 },
// ];

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    login: { type: GraphQLString },
    hash: { type: GraphQLString },
    name: { type: GraphQLString },
    id: { type: GraphQLString },
  }),
});

const PostType = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    header: { type: GraphQLString },
    content: { type: GraphQLString },
    date: { type: GraphQLInt },
    tags: { type: GraphQLList(GraphQLString) },
    img: { type: GraphQLString },
    user: { type: GraphQLUser },
    id: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    customer: {
      type: UserType,
      args: {
        login: { type: GraphQLString },
      },
      async resolve(parentValue, args) {
        return userService.getByLogin(args.login);
      },
    },
    customer: {
      type: PostType,
      args: {
        id: { type: GraphQLInt },
      },
      async resolve(parentValue, args) {
        if (args.id) {
          return postService.getById(args.id);
        }
        return postService.getAll();
      },
    },
  },
});

export const schema = new GraphQLSchema({ query: RootQuery });
