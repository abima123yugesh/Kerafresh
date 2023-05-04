const Product = require("../models/productModel");

//Create New Product
const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    const images = req.files.map((file) => file.path);
    newProduct.images = images;
    await newProduct.save();
    res.json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
};

//Get a All Product
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    throw new Error(error);
  }
};

//Get a Single Product
const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const findProduct = await Product.findById(id);
    res.json(findProduct);
  } catch (error) {
    throw new Error(error);
  }
};

//Update a Product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedProduct);
  } catch (error) {
    throw new Error(error);
  }
};

//Delete a Product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete({ _id: id });
    res.json(deletedProduct);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createProduct,
  getProduct,
  updateProduct,
  getAllProducts,
  deleteProduct,
};
