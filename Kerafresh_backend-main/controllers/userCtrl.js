const mongoose = require("mongoose");
const User = require("../models/userModel");
const generateToken = require("../config/jwtToken");
const generateRefreshToken = require("../config/refreshToken");
const validateMongoDbId = require("../utils/validateMongodbId");

//Create a new user
const createUser = async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    //Create a new User
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    throw new Error("User Already Exists");
  }
};

//Login A User
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(findUser?._id);
    const updateUser = await User.findByIdAndUpdate(
      findUser._id,
      {
        refreshToken: refreshToken,
      },
      { new: true }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      _id: findUser?._id,
      firstname: findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      token: generateToken(findUser?._id),
    });
  } else {
    throw new Error("Invalid Credentials");
  }
};

const logOutUser = async (req, res) => {
  try {
    const refreshToken = req.cookies?.refreshToken;
    if (!refreshToken) {
      return res.status(401).send({ message: "No Refresh Token Cookies" });
    }
    const user = await User.findOneAndUpdate(
      { refreshToken },
      { refreshToken: "" },
      { new: true }
    );
    if (!user) {
      return res
        .clearCookie("refreshToken")
        .status(401)
        .send({ message: "Unauthorized" });
    }
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });
    return res.sendStatus(204); // No Content
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.isPasswordMatched(password))) {
      throw new Error("Invalid email or password");
    }
    const role = user.role;

    if (role == "admin") {
      const refreshToken = await generateRefreshToken(user?._id);
      const updatedUser = await User.findByIdAndUpdate(
        user._id,
        { refreshToken },
        { new: true }
      );
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 72 * 60 * 60 * 1000,
        secure: true,
      });
      res.json({
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      throw new Error(" Unauthorized access");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//admin logout
const logoutAdmin = async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
    return res.status(401).json({ message: "Refresh token not provided" });
  }
  try {
    // Find user by refresh token
    const user = await User.findOne({ refreshToken });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Clear refresh token in user document
    user.refreshToken = "";
    await user.save();
    // Send success message
    res.json({ message: "Logout successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Get a Single User
const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const getaUser = await User.findById(id);
    if(!getaUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({
      getaUser,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid user ID hghfgf" });
    }
    throw new Error(error);
  }
};

//Get All Users
const getAllUsers = async (req, res) => {
  try {
    const getUsers = await User.find();
    res.json(getUsers);
  } catch (error) {
    throw new Error(error);
  }
};

//Add to Wishlist
const addToWishlist = async (req, res) => {
  const { _id } = req.user;
  const { productId } = req.body;
  try {
    let user = await User.findById(_id);
    const alreadyadded = user.wishlist.find(
      (id) => id.toString() === productId
    );
    if (alreadyadded) {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $pull: { wishlist: productId },
        },
        { new: true }
      );
      res.json(user);
    } else {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $push: { wishlist: productId },
        },
        { new: true }
      );
      res.json(user);
    }
  } catch (error) {
    throw new Error(error);
  }
};

//Get User Wishlist
const getUserWishlist = async (req, res) => {
  const { id } = req.params;
  // Check if `id` is a valid MongoDB object ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }
  try {
    const findUser = await User.findById({ _id: id }).populate("wishlist");
    res.json(findUser);
  } catch (error) {
    throw new Error(error);
  }
};

const customersList = async (req, res) => {
  try{
    const getUsers = await User.find();
    res.json(getUsers);
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  createUser,
  loginUser,
  logOutUser,
  getUser,
  customersList,
  getAllUsers,
  addToWishlist,
  getUserWishlist,
  loginAdmin,
  logoutAdmin,
  
};
