import express from "express";
import { dbConnect } from "./src/Config/config.js";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
const app = express();
import dotenv from "dotenv";
import { router } from "./src/Routes/routes.js";
dotenv.config();

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// application Port
const PORT = process.env.PORT || 3000;
app.use(cors());

// database connection
dbConnect();
app.use(bodyParser.json());

// API routes
app.use("/", router);

app.listen(3001, function () {
  console.log("Server is started..");
});
