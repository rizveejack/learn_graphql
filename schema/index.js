const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");
const SMSType = require("../schemaTypes/SMSType");

const RootQueryType = new GraphQLObjectType({
  name: "RootQuery",
  fields: () => ({
    SMSType: {
      type: SMSType,
      resolve: () => ({
        message: "hello world",
      }),
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
});

module.exports = schema;
