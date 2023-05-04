const express = require("express");
const {
  addToCart,
  removeProductFromCart,
  emptyCart,
  getUserCart,
  updateCart,
} = require("../controllers/cartCtrl");
const { authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, addToCart);
router.put("/:id", authMiddleware, updateCart);
router.delete("/:id", authMiddleware, removeProductFromCart);
router.delete("/", authMiddleware, emptyCart);
router.get("/", authMiddleware, getUserCart);

module.exports = router;
