const express = require("express");
const { createEnquiry, getAllEnquiries } = require("../controllers/enqCtrl");

const router = express.Router();

router.post("/", createEnquiry);
router.get("/", getAllEnquiries);

module.exports = router;
