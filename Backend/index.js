const express = require("express");
const { connect } = require("./config/db");
const { userRouter } = require("./routes/user.routes");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("This is the Home Page ");
});
app.use(express.json());
app.use("/user", userRouter);

app.listen(process.env.port, async () => {
  try {
    await connect;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
  console.log("server running at 8080");
});
