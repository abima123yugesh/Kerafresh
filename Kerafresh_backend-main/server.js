const dotenv = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dbConnect = require("./config/dbConnect");
const app = express();
const PORT = 5000;

//Routes
const userRouter = require("./routes/userRoute");
const productRouter = require("./routes/productRoute");
const productCategoryRouter = require("./routes/productCategoryRoute");
const cartRouter = require("./routes/cartRoute");
const orderRouter = require("./routes/orderRoute");
const enqRouter = require("./routes/enqRoute");

const cors = require("cors");
const morgan = require("morgan");
dbConnect();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/productcategory", productCategoryRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/enquiry", enqRouter);

app.get("/", (req, res) => {
  res.send("Kera Fresh Server");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
