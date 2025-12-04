const express = require("express")
const dotenv = require("dotenv");
const connectDB = require("./utils/db")
dotenv.config({});

const app = express();
const PORT = process.env.PORT || 2006;

app.listen(PORT, () => {
  connectDB();
  console.log(`http://localhost/${PORT}`);
})