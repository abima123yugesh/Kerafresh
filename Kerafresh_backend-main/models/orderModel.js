const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    companyName: {
      type: String,
    },
    companyAddress: {
      type: String,
    },
    district: {
      type: String,
      required: true,
    },
    houseNumber: {
      type: String,
      required: true,
    },
    apartment: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
    },
    paymentMode: {
      type: String,
      default: "cod",
    },
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "Processing",
      enum: ["Processing", "Ready for Dispatch", "Dispatched", "Delivered"]
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
