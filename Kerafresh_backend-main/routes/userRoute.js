const express = require("express");
const {
  createUser,
  loginUser,
  getUser,
  getAllUsers,
  addToWishlist,
  getUserWishlist,
  logOutUser,
  loginAdmin,
  logoutAdmin,
  customersList,
} = require("../controllers/userCtrl");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = express.Router();
router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/logout", logOutUser);
router.get("/customerlist", customersList)
router.get("/:id", getUser);
router.get("/allUsers", getAllUsers);

router.put("/add-to-wishlist", authMiddleware, addToWishlist);
router.get("/get-user-wishlist/:id", getUserWishlist);
router.post("/login-admin", loginAdmin);
router.post("/logout-admin", logoutAdmin);

module.exports = router;
