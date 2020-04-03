const { ApolloServer } = require("apollo-server");
const { ApolloGateway } = require("@apollo/gateway");

const serviceList = [
  {
    name: "accounts-test",
    url: process.env.ACCOUNTS_URL || "http://localhost:4001",
  },
  {
    name: "inventory-test",
    url: process.env.INVENTORY_URL || "http://localhost:4002",
  },
  {
    name: "products-test",
    url: process.env.PRODUCTS_URL || "http://localhost:4003",
  },
  {
    name: "reviews-test",
    url: process.env.REVIEWS_URL || "http://localhost:4004",
  },
];

console.log("service list: ", serviceList);

const gateway = new ApolloGateway({ serviceList });

(async () => {
  const server = new ApolloServer({
    gateway,

    // Apollo Graph Manager (previously known as Apollo Engine)
    // When enabled and an `ENGINE_API_KEY` is set in the environment,
    // provides metrics, schema management and trace reporting.
    engine: {
      apiKey: process.env.ENGINE_API_KEY,
    },

    // Subscriptions are unsupported but planned for a future Gateway version.
    subscriptions: false,
  });

  server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Gateway Server ready at ${url}`);
  });
})();
