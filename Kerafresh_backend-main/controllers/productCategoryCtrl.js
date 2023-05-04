const ProductCategory = require("../models/productCategoryModel");

//Create Product Category
const createProductCategory = async (req, res) => {
  try {
    const newProductCategory = await ProductCategory.create(req.body);
    const images = req.files.map((file) => file.path);
    newProductCategory.images = images;
    await newProductCategory.save();
    res.json(newProductCategory);
  } catch (error) {
    throw new Error(error);
  }
};

//Get all Product Categories
const getAllProductCategories = async (req, res) => {
  try {
    const getAllProductCategory = await ProductCategory.find();
    res.json(getAllProductCategory);
  } catch (error) {
    throw new Error(error);
  }
};

//Get A Product Category
const getProductCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const productcategory = await ProductCategory.findById(id);
    res.json(productcategory);
  } catch (error) {
    throw new Error(error);
  }
};

//Update a Product Category
const updateProductCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedproductcategory = await ProductCategory.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    res.json(updatedproductcategory);
  } catch (error) {
    throw new Error(error);
  }
};

//Delete a Product Category
const deleteProductCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedproductcategory = await ProductCategory.findByIdAndDelete(id);
    res.json(deletedproductcategory);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createProductCategory,
  getAllProductCategories,
  getProductCategory,
  updateProductCategory,
  deleteProductCategory,
};
