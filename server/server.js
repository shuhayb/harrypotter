import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors()); // Enable CORS for all requests
app.use(express.json()); // Middleware to parse JSON


// Define GraphQL schema
const schema = buildSchema(`
  type Query {
    characters: [Character!]!
  }

  type Character {
    id: ID
    name: String
    gender: String
    house: String
    actor: String
    image: String
  }
`);

// GraphQL resolvers
const root = {
  characters: async () => {
    try {
      const response = await fetch("http://hp-api.onrender.com/api/characters");
      const data = await response.json();

      // Ensure the data matches the expected GraphQL schema
      return data.map((char) => ({
        id: char.id || char.name, // Use name as fallback ID (if missing)
        name: char.name,
        gender: char.gender,
        house: char.house,
        actor: char.actor,
        image: char.image,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
      throw new Error("Failed to fetch characters");
    }
  },
};

// Set up GraphQL endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true, // Enable GraphQL Playground at localhost:4000/graphql
  })
);

// app.use(
//   "http://localhost:4000/",
//   express.json(),
//   createProxyMiddleware({
//     target: "http://localhost:4000/",
//     onProxyReq: (req) => {console.log(req)},
//     changeOrigin: true,
//     selfHandleResponse: true,
//     onProxyRes: (res) => console.log(res)
//   })
// )

// app.get("/characters", async (req, res) => {
//   try {
//     const response = await axios.get("https://hp-api.onrender.com/api");
//     console.log(response.data);
//     res.json(response.data);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Failed to fetch data" });
//   }
// });

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/graphql`);
});
