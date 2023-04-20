const express = require("express");
const productsRouter = require("./routes/products");
const authRouter = require("./routes/auth");
const dotenv = require("dotenv");
const connect = require("./connect");
const verifyToken = require("./middleware/verifyToken");
dotenv.config();
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use("/auth", authRouter);

app.use("/products", verifyToken, productsRouter);
connect();

app.listen(5000, () => {
  console.log("runing test");
});
