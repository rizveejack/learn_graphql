const { GraphQLObjectType, GraphQLString } = require("graphql");

const SMSType = new GraphQLObjectType({
  name: "SMSType",
  fields: () => ({
    message: {
      type: GraphQLString,
    },
  }),
});

module.exports = SMSType;
