const express = require("express");
const userRouter = express();
const bcrypt = require("bcrypt");
const { UserModel } = require("../model/user.model");
const jwt = require("jsonwebtoken");
/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          description: The auto-generated id of the user
 *        firstName:
 *          type: string
 *          description: The first name of user
 *        lastName:
 *          type: string
 *          description: The last name of user
 *        email:
 *          type: string
 *          description: The user email
 *        mobile:
 *           type: integer
 *           description: mobile number of the user
 *        gender:
 *           type: string
 *           description: gender of the user
 */

/**
 * @swagger
 * tags:
 *  name: User
 *  description: All the API routes related to User
 */

// for register the user ---->
/**
 * @swagger
 * /user/register:
 *    post:
 *      summary: To register the details of a new user
 *      tags: [User]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        200:
 *          description: The user was successfully registered
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: User register successfully
 *                  status:
 *                    type: string
 *                    description: Success
 *        500:
 *          description: Something went wrong
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: User register successfully
 *                  status:
 *                    type: string
 *                    description: Failed
 */

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

/**
 * @swagger
 * /user/login:
 *    post:
 *      summary: To login the existing user
 *      tags: [User]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *                type: object
 *                properties:
 *                  email:
 *                    type: string
 *                  password:
 *                    type: string
 *      responses:
 *        200:
 *          description: The user was successfully login
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: User Login successfully
 *                  status:
 *                    type: string
 *                    description: Success
 *                  token:
 *                    type: string
 *                  data:
 *                    type: object
 *        500:
 *          description: Something went wrong
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  status:
 *                    type: string
 *                    description: Failed
 */

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
            data: user[0],
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

// get all the users

/**
 * @swagger
 * /user/all-users:
 *    get:
 *      summary: To get the details of all users
 *      tags: [User]
 *      responses:
 *        200:
 *          description: Successfully, getting all the users
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  data:
 *                    $ref: '#/components/schemas/User'
 *                  status:
 *                    type: string
 *                    description: Success
 *        500:
 *          description: Something went wrong
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  status:
 *                    type: string
 *                    description: Failed
 */

userRouter.get("/all-users", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(201).json({
      status: "Success",
      data: users,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Something went wrong", status: "Failed" });
  }
});

/**
 * @swagger
 * /user/delete/{id}:
 *    delete:
 *      summary: To delete an existing user
 *      tags: [User]
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: integer
 *      responses:
 *        200:
 *          description: The user was successfully deleted
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  status:
 *                    type: string
 *                    description: Success
 *        500:
 *          description: Something went wrong
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: User register successfully
 *                  status:
 *                    type: string
 *                    description: Failed
 */

userRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const users = await UserModel.findByIdAndDelete({ _id: id });
    res.status(201).json({
      status: "Success",
      message: "User delted Successfully",
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Something went wrong", status: "Failed" });
  }
});

/**
 * @swagger
 * /user/update/{id}:
 *    patch:
 *      summary: To update the details of an existing user
 *      tags: [User]
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: integer
 *      requestBody:
 *        required: false
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        200:
 *          description: The user details updated successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: User register successfully
 *                  status:
 *                    type: string
 *                    description: Success
 *        500:
 *          description: Something went wrong
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: User register successfully
 *                  status:
 *                    type: string
 *                    description: Failed
 */

userRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const users = await UserModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(201).json({
      status: "Success",
      message: "User data updated Successfully",
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Something went wrong", status: "Failed" });
  }
});
module.exports = {
  userRouter,
};
