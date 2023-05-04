const Enquiry = require("../models/enqModel");

//post a enquiry
const createEnquiry = async (req, res) => {
  try {
    const newEnquiry = await Enquiry.create(req.body);
    res.json(newEnquiry);
  } catch (error) {
    throw new Error(error);
  }
};

//get all enquiries
const getAllEnquiries = async (req, res) => {
  try {
    const getEnquiries = await Enquiry.find();
    res.json(getEnquiries);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createEnquiry,
  getAllEnquiries,
};
