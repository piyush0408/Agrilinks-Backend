const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const errorMiddleware = require("./middleware/error");
var cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// //route imports
// const product= require("./routes/productRoute");
const user = require("./routes/reportRoute");
// const order = require("./routes/orderRoute");
// app.use("/api/v1",product);
app.use("/api/v1", user);
// app.use("/api/v1",order);

// // middleware for error
app.use(errorMiddleware);
module.exports = app;
