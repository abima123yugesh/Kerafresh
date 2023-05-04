const Cart = require("../models/cartModel");
const User = require("../models/userModel");
const Product = require("../models/productModel");

//Add to Cart
const addToCart = async (req, res) => {
  const { cart } = req.body;
  const { _id } = req.user;
  try {
    const user = await User.findById(_id);
    let cartExists = await Cart.findOne({ orderby: user._id });
    if (!cartExists) {
      cartExists = new Cart({
        products: [],
        cartTotal: 0,
        orderby: user._id,
      });
    }
    for (let i = 0; i < cart?.length; i++) {
      const product = cart[i];
      let existingProduct = cartExists.products.find(
        (p) => p.product.toString() === product._id.toString()
      );
      if (existingProduct) {
        existingProduct.count += product.count;
      } else {
        const productDetails = await Product.findById(product._id);
        const newProduct = {
          product: productDetails._id,
          count: product.count,
          price: productDetails.price,
          title: productDetails.title,
        };
        cartExists.products.push(newProduct);
      }
    }
    let cartTotal = 0;
    for (let i = 0; i < cartExists.products.length; i++) {
      cartTotal += cartExists.products[i].price * cartExists.products[i].count;
    }
    cartExists.cartTotal = cartTotal;
    await cartExists.save();
    res.json({ success: "Cart has been updated successfully " });
  } catch (error) {
    throw new Error(error);
  }
};

const updateCart = async (req, res) => {
  const { cart } = req.body;
  const { _id } = req.user;
  try {
    const user = await User.findById(_id);
    const cartExists = await Cart.findOne({ orderby: user._id });
    if (!cartExists) {
      throw new Error("No cart found for the user");
    }
    for (let i = 0; i < cart?.length; i++) {
      const product = cart[i];
      const existingProduct = cartExists.products.find(
        (p) => p.product.toString() === product._id.toString()
      );
      if (existingProduct) {
        existingProduct.count = product.count;
      } else {
        const productDetails = await Product.findById(product._id);
        const newProduct = {
          product: productDetails._id,
          count: product.count,
          price: productDetails.price,
          title: productDetails.title,
        };
        cartExists.products.push(newProduct);
      }
    }
    let cartTotal = 0;
    for (let i = 0; i < cartExists.products.length; i++) {
      cartTotal += cartExists.products[i].price * cartExists.products[i].count;
    }
    cartExists.cartTotal = cartTotal;
    await cartExists.save();
    res.json({ success: "Cart has been updated successfully " });
  } catch (error) {
    throw new Error(error);
  }
};

//Get User's Cart
const getUserCart = async (req, res) => {
  const { _id } = req.user;
  try {
    const cart = await Cart.findOne({ orderby: _id }).populate(
      "products.product"
    );
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
};

//delete an item from user's cart
const removeProductFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const cart = await Cart.findOne({ orderby: userId });
    if (!cart) {
      res.status(404).json({ error: "Cart not found" });
      return;
    }
    const deletedProduct = cart.products.find(
      (product) => product.product.toString() === id
    );
    if (!deletedProduct) {
      res.status(404).json({ error: "Product not found in cart" });
      return;
    }
    cart.cartTotal -= deletedProduct.price * deletedProduct.count;
    const result = await Cart.updateOne(
      { orderby: userId },
      { $pull: { products: { product: id } }, cartTotal: cart.cartTotal }
    );
    if (result.nModified === 0) {
      res.status(404).json({ error: "Product not found in cart" });
      return;
    }
    const updatedCart = await Cart.findOne({ orderby: userId });
    if (updatedCart.products.length === 0) {
      await Cart.findOneAndRemove({ orderby: userId });
    }
    res.status(200).json({ message: "Successfully removed product from cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to remove product from cart" });
  }
};

//Clear Cart{empty cart}
const emptyCart = async (req, res) => {
  const { _id } = req.user;
  try {
    const user = await User.findOne({ _id });
    const cart = await Cart.findOneAndRemove({ orderby: user._id });
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  addToCart,
  removeProductFromCart,
  emptyCart,
  getUserCart,
  updateCart,
};
