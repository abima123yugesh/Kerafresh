const express = require("express");
const {
  createProduct,
  getProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
} = require("../controllers/productCtrl");
const upload = require("../middlewares/fileUpload");

const router = express.Router();

router.post("/", upload.array("images", 5), createProduct);
router.get("/:id", getProduct);
router.get("/", getAllProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
