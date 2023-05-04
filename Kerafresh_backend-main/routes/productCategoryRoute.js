const express = require("express");
const {
  createProductCategory,
  getAllProductCategories,
  getProductCategory,
  updateProductCategory,
  deleteProductCategory,
} = require("../controllers/productCategoryCtrl");
const upload = require("../middlewares/fileUpload");

const router = express.Router();

router.post("/", upload.array("images", 2), createProductCategory);
router.get("/", getAllProductCategories);
router.get("/:id", getProductCategory);
router.put("/:id", updateProductCategory);
router.delete("/:id", deleteProductCategory);

module.exports = router;
