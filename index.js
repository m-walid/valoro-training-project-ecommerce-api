const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const dbConfig = require("./config");

const exceptionHandler = require("./middlewares/exceptionHandler");

const usersRouter = require("./API/users/users.routes");
const productsRouter = require("./API/products/products.routes");
const ordersRouter = require("./API/orders/orders.routes");

const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

//routers
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/orders", ordersRouter);

app.use(exceptionHandler);
(async () => {
  try {
    await dbConfig();
    await app.listen(process.env.PORT);
    console.log(`server running on port: ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
})();
