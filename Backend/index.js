const express = require("express");
const { connect } = require("./config/db");
const app = express();
require("dotenv").config();
app.listen(process.env.port, async () => {
  try {
    await connect;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
  console.log("server running at 8080");
});
