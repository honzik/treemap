import "reflect-metadata";
import { GraphQLServer } from "graphql-yoga";
import { createConnection } from "typeorm";
import { ResolverMap } from "./types/ResolverType";
import { Note } from "./entity/Note";

const typeDefs = `
  type Note {
    id: Int!
    title: String!
    description: String
    color: String
    parentNote: Note
    childNotes: [Note!]!
  }

  type Query {
    hello(name: String): String!
    note(id: Int!): Note!
    notes: [Note!]!
  }

`;

const resolvers: ResolverMap = {
  Query: {
    hello: (_: any, { name }: any) => `hhello ${name || "World"}`,
    note: (_, {id}) => Note.findOne(id),
    notes: () => Note.find({relations: ["parentNote", "childNotes"]}),
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });
createConnection().then((connection) => {

  server.start(() => console.log("Server is running on localhost:4000"));  
})

