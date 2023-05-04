const Cart = require("../models/cartModel");
const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const User = require("../models/userModel");

const { EMAIL } = "sikha.branding@gmail.com";

//Place order

const createOrder = async (req, res) => {
  const {
    user_id,
    firstname,
    lastname,
    email,
    phoneNumber,
    district,
    houseNumber,
    apartment,
    city,
    state,
    pincode,
    // paymentMode,
    amount,
    // status,
  } = req.body;
  if (
    !user_id ||
    !firstname ||
    !lastname ||
    !email ||
    !phoneNumber ||
    !district ||
    !houseNumber ||
    !apartment ||
    !city ||
    !state ||
    !pincode ||
    // !paymentMode ||
    !amount
    // !status
  ) {
    return res.status(422).json({ error: "some fields are empty" });
  }
  try {
    const { id } = req.params;
    const cartlist = await Cart.find({ orderby: id });
    const orderItems = [];
    cartlist.forEach((cartItem) => {
      cartItem.products.forEach((product) => {
        orderItems.push({
          product: product.product,
          quantity: product.count,
          price: product.price,
          title: product.title,
        });
      });
    });
    const orderplaced = new Order({
      items: orderItems,
      user_id,
      firstname,
      lastname,
      email,
      phoneNumber,
      district,
      houseNumber,
      apartment,
      city,
      state,
      pincode,
      // paymentMode,
      amount,
      // status,
    });
    const product_items = await orderplaced.save();
    if (product_items) {
      // update the product quantity in the database
      cartlist.forEach(async (cartItem) => {
        cartItem.products.forEach(async (product) => {
          await Product.findByIdAndUpdate(
            product.product,
            { $inc: { quantity: -product.count, sold: product.count } },
            { new: true }
          );
        });
      });
      await Cart.deleteMany({ orderby: id }); // delete the cart items
      res.status(201).json({ message: "success" });
    } else {
      res.status(500).json({ error: "failed" });
    }
  } catch (err) {
    console.log(err);
  }
};

/**send email */
const sendemail = async (req, res) => {
  let config = {
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: "rbrarpigaheyavvd",
    },
  };
  let transporter = nodemailer.createTransport(config);

  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Mailgen",
      link: "https://mailgen.js/",
    },
  });

  let response = {
    body: {
      name,
      intro: "Your bill has arrived!",
      table: {
        data: [
          {
            item: "Nodemailer Stack Book",
            description: "A Backend Application",
            price: "$10.99",
          },
        ],
      },
      outro: "Looking forward to do more business",
    },
  };
  let mail = MailGenerator.generate(response);

  let message = {
    from: EMAIL,
    to: userEmail,
    subject: "Place Order",
    html: mail,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({
        msg: "you should receive an email",
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });

  res.status(201).json("email send successfully");
};

//Get all orders
const getAllOrders = async (req, res) => {
  try {
    const allUserOrders = await Order.find();
    const result = [];
    for (item of allUserOrders) {
      result.push({
        orderid: item._id,
        username: item.firstname + "" + item.lastname,
        items: item.items,
        phoneNumber: item.phoneNumber,
        address:
          item.houseNumber +
          "," +
          item.apartment +
          "," +
          item.city +
          "," +
          item.district +
          "," +
          item.state +
          "," +
          item.pincode,
        amount: item.amount,
        status: item.status,
        createdAt: item.createdAt,
      });
    }
    res.json(result);
  } catch (error) {
    throw new Error(error);
  }
};

// Update order status
const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { $set: { status } },
      { new: true }
    );
    res.json(updatedOrder);
  } catch (error) {
    throw new Error(error);
  }
};

//get a user order
const getUserOrder = async (req, res) => {
  const { _id } = req.user;

  try {
    const order = await Order.find({ user_id: _id });
    if (order) {
      res.status(200).json({ order });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  updateOrderStatus,
  getUserOrder,
  sendemail,
};
