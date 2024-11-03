import { ApolloServer } from "@apollo/server";
import { schema } from "./schema/schema.js";
import { graphQlResolver } from "../resolver/resolver.js";

export const connectGraphQl = () => {
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers: graphQlResolver,
  });
  return server;
};
