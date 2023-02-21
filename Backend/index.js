const express = require("express");
const { connect } = require("./config/db");
const { authenticate } = require("./middlewares/Authentication.middelware");
const { cartRouter } = require("./routes/cart.routes");
const { productRouter } = require("./routes/products.routes");
const { userRouter } = require("./routes/user.routes");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(
  cors({
    origin: "*",
  })
);
app.get("/", (req, res) => {
  res.send("This is the Home Page ");
});
app.use(express.json());
app.use("/user", userRouter);
app.use("/products", productRouter);
app.use("/cart", authenticate, cartRouter);

app.listen(process.env.port, async () => {
  try {
    await connect;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
  console.log("server running at 8080");
});
