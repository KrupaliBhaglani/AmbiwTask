import express from "express";
// import { router } from "./src/routes/routes.js";
import { dbConnect } from "./src/Config/config.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
import dotenv from "dotenv";
dotenv.config();

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// application Port
const PORT = process.env.PORT || 5000;
app.use(cors());

// database connection
dbConnect();
app.use(bodyParser.json());

// API routes
// app.use("/R1/Api", router);

app.listen(PORT, function () {
  console.log("Server is started..");
});
