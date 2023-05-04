const mongoose = require("mongoose");

const enqSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
  },
  comment: {
    type: String,
    required: true,
  },
  serviceType: {
    type: String,
    default: "Gardening",
    enum: [
      "Gardening",
      "Landscaping",
      "Vegetables Growing",
      "Land Preparation",
    ],
  },
});

//Export the model
module.exports = mongoose.model("Enquiry", enqSchema);
