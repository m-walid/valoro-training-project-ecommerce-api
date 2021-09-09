const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const dbConfig = require("./config");

const exceptionHandler = require("./middlewares/exceptionHandler");

const usersRouter = require("./users/users.routes");
const productsRouter = require("./products/products.routes");
const ordersRouter = require("./orders/orders.routes");
const authRouter = require("./auth/auth.routes");

const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

//routers
app.use("/user", usersRouter);
app.use("/product", productsRouter);
app.use("/order", ordersRouter);
app.use("/auth", authRouter);

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
