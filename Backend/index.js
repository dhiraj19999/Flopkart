const express = require("express");
const { connect } = require("./config/db");
const { authenticate } = require("./middlewares/Authentication.middelware");
const { cartRouter } = require("./routes/cart.routes");
const { productRouter } = require("./routes/products.routes");
const { userRouter } = require("./routes/user.routes");
const app = express();
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
require("dotenv").config();

app.use(
  cors({
    origin: "*",
  })
);

// openpi specification
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Flopkart Api",
      version: "1.0.0",
      description:
        "This is a REST API application made with Express and retriving data from mongodb Atlas",
      contact: {
        name: "Piryanshu Bisht",
        email: "deepubisht2004@gmail.com",
      },
    },
    servers: [
      {
        url: "https://drab-pants-bass.cyclic.app/",
      },
      {
        url: "http://localhost:8080",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

//swagger specs
const swaggerSpec = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

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
