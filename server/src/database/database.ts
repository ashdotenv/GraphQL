import mongoose from "mongoose";
export const connectToDb = (uri:string) => {
  mongoose
    .connect(uri, { dbName: "graphql" })
    .then((c) => console.log("Connected to ", c.connection.host))
    .catch((error) => console.error("Database connection error:", error));
};
