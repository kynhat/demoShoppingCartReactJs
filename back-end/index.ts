import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { JsonDB, Config } from 'node-json-db';
const db = new JsonDB(new Config('./data/db.json', true, false, '/'));

const typeDefs = `#graphql
  type Product {
    id: ID
    category: String
    amount: Int
    title: String
    price: Int
    image: String
    description: String
  }

  type Checkout {
    id: ID
    category: String
    amount: Int
    title: String
    price: Int
    image: String
    description: String
  }

  type Account {
    id: ID
    username: String
    password: String
}

  type ProductCheckout {
    id: ID
    name: String
    price: Int
    quantity: Int
    totalprice: Int
    checkout: Checkout
}

# Query is Root type
type Query {
  products: [Product]
  product(id: ID!): Product
  productcheckouts: [ProductCheckout]
  productcheckout(id: ID!): ProductCheckout
  checkouts: [Checkout]
  checkout(id: ID!): Checkout
  account(username: String, password: String) : Boolean
}

  # Mutation
  type Mutation {
    createProduct(name: String, price: Int, image: String, description: String, title: String, amount: Int, category: String) : Boolean
    checkout(name: String, price: Int, image: String, description: String, title: String, amount: Int, category: String) : Boolean
    createUser(username: String, password: String) : Boolean
    loginUser(username: String, password: String) : Boolean
  }
`;

const resolvers = {
  Query: {
    products: async () => {
      const productDb = await db.getData("/products");
      return productDb;
    },

    product: async ({ id }) => {
      // const productDbById = await db.getData("/products");
      // return productDbById;
    },
    
    // checkouts: async () => {
    //   const checkoutDb = await db.getData("/checkouts");
    //   return checkoutDb;
    // },

    checkout: async ({ id }) => {
      // const checkoutDbById = await db.getData("/checkouts");
      // return checkoutDbById;
    },


  },

  Mutation: {
    checkout: async ({ cartItem }) => {
      console.log("cartItem", cartItem);
      
      // const addCartDB = await db.push("/checkouts", cartItem, true);
      // console.log("added cart item", addCartDB);
      // return addCartDB;
    },
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);