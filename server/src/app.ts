import express, { NextFunction, RequestHandler, Response } from "express";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import morgan from "morgan";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./graphql/schema/schema.js";
import { connectToDb } from "./database/database.js";
import { getAllUsers } from "./controllers/user.controller.js";
import {
  getAllCourses,
  getCourseById,
} from "./controllers/course.controller.js";
import { graphQlResolver } from "./resolver/resolver.js";
import { connectGraphQl } from "./graphql/graphql.js";
import { expressMiddleware } from "@apollo/server/express4";

dotenv.config({ path: "./.env" });
console.log(process.env.DB_URI);

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: " * ", credentials: true }));
app.use(morgan("dev"));

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });
const DB_URI = process.env.DB_URI as string;
connectToDb(DB_URI);
const graphQlServer = connectGraphQl();
await graphQlServer.start();
const isAdmin: RequestHandler = (req, res, next) => {
  const user = { role: "Admin" };
  if (user.role === "Admin") next();
  else res.status(403).send("You are not an Admin.");
};
app.use("/graphql", isAdmin, expressMiddleware(graphQlServer));

// your routes here

app.get("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
  });
});
// app.use(errorMiddleware);

app.listen(port, () =>
  console.log("Server is working on Port:" + port + " in " + envMode + " Mode.")
);
