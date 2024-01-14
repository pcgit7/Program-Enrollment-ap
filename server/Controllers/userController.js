const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Program = require('../Models/programModel');

const UserRegister = async (req, res) => {
  try {
    //if already exits then return
    console.log(req.body);
    const userExists = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (userExists) {
      return res.send({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;

    const newUser = await User.create(req.body);

    res.send({
      success: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
    });
  }
};

const UserLogin = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      return res.send({
        message: "User does not exits",
        success: false,
      });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.send({
        success: false,
        message: "Invalid password",
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.send({
      success: true,
      message: "User logged in successfully",
      data: token,
    });
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
    });
  }
};


const AddProgram = async (req,res) => {
  try 
  {
    const newProgram = await Program.create(req.body);
    res.send({
      success: true,
      message: "User created successfully",
      data: newProgram,
    });
  } catch (error) {
    res.send({
      success : false,
      message : error.message
    });
  }
};

module.exports = { UserLogin ,UserRegister , AddProgram};
