// store our data in cloud mongodb.com
import dotenv from "dotenv";
// import {db} from "./src/Config/db";
// import mongodb from "mongodb";
import mongoose from "mongoose";
dotenv.config();

const db = process.env.DB_URL;

//connect to the database
function dbConnect() {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("Connect to the MongoDB");
    })
    .catch((err) => {
      console.log("Not connected", err);
    });
}

export { db, dbConnect };
