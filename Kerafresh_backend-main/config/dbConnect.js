const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected");
  } catch (error) {
    console.log("Database Connection Failed");
  }
};

module.exports = dbConnect;
