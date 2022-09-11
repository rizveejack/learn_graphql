const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");

require("dotenv").config();
const port = process.env.PORT ?? 5000;
const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(port, () => console.log(`🚀 http://localhost:${port}`));
