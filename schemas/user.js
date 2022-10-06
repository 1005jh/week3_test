const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ID: {
    type: String,
    required: true,
  },
  pw: {
    type: String,
    required: true,
  },
});

userSchema.virtual("userId").get(function () {
  return this._id.toHexString();
});

module.exports = mongoose.model("Users", userSchema);
