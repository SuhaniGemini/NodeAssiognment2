const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name: String,
    gender: String,
    phone: Number,
    email: String,
    category:String,
    tech: [String],
  });
  const userModel = mongoose.model("user", userSchema);
  module.exports = userModel;