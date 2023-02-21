const mongoose = require("mongoose");

const reqString = { type: String, required: true };
const reqNumber = { type: Number, required: true };

const userSchema = mongoose.Schema({
  firstName: reqString,
  lastName: reqString,
  email: reqString,
  gender: reqString,
  mobile: reqNumber,
  password: reqString
});

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
