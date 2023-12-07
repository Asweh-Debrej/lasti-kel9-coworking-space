const mongoose = require("mongoose");

exports.connect = (uri) => {
  mongoose.connect(uri)
};