const express = require("express");
const {
  createOrder,
  getAllOrders,
  getUserOrder,
  updateOrderStatus,
} = require("../controllers/orderCtrl");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/place-order/:id", createOrder);
router.get("/allorders", getAllOrders);
router.get("/user-order", authMiddleware, getUserOrder);
router.put("/orders/:orderId", updateOrderStatus);

module.exports = router;
