const fs = require("fs");

const deleteFile = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      throw new Error(err);
    }
    console.log("File deleted successfully.");
  });
};

module.exports = deleteFile;
