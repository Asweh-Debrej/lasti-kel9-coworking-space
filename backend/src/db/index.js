const mongoose = require("mongoose");

exports.connect = (uri) => {
  const options = {
    autoIndex: false, // Don't build indexes
      maxPoolSize: 10, // Maintain up to 10 socket connections
  };

  mongoose.connect(uri, options)
};