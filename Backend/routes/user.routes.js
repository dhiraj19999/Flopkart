const express = require("express");
const userRouter = express();
const bcrypt = require("bcrypt");
const { UserModel } = require("../model/user.model");
const jwt = require("jsonwebtoken");
// for register the user ---->
userRouter.post("/register", async (req, res) => {
  const { firstName, lastName, email, password, gender, mobile } = req.body;
  const newuser = await UserModel.find({ email });
  if (newuser.length != 0) {
    res.status(500).json({
      message: "This user is already signup ,Please login",
      status: "Failed",
    });
    return;
  }
  try {
    bcrypt.hash(password, 6, async (err, hash_pass) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .json({ message: "Something went wrong", status: "Failed" });
      } else {
        const user = new UserModel({
          firstName,
          lastName,
          email,
          password: hash_pass,
          gender,
          mobile,
        });
        await user.save();
        res
          .status(201)
          .json({ message: "User register successfully", status: "Success" });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message, status: "Failed" });
  }
});



// for login the existing users -->
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, async (err, result) => {
        if (!result) {
          console.log(err);
          return res
            .status(500)
            .json({ message: "Wrong Password", status: "Failed" });
        } else {
          let token = jwt.sign({ userID: user[0]._id }, "flopkart");
          res.status(201).json({
            message: "User login successfully",
            status: "Success",
            token,
          });
        }
      });
    } else {
      return res
        .status(500)
        .json({ message: "Please Signup  first", status: "Failed" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message, status: "Failed" });
  }
});





module.exports = {
  userRouter,
};
