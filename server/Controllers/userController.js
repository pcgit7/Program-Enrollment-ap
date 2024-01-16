const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Program = require("../Models/programModel");

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
    console.log(req.body);
    const user = await User.findOne({
      where: {
        email: req.body.email
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

    console.log(process.env.JWT_SECRET, user.email);
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
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

const AddProgram = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email
      },
      attributes: { exclude: ['password'] } 
    });
    
    req.body.userId = user.userId;
    const newProgram = await Program.create(req.body);
    res.send({
      success: true,
      message: "User created successfully",
      data: newProgram,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const GetUserDetails = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email
      },
      attributes: { exclude: ['password'] } 
    });
    
    user.password = undefined;

    const allPrograms = await Program.findAll({
      where: {
        userId: user.userId,
      },
    });

    res.send({
      success: true,
      message: "User data fetched successfullly",
      data: {
        user,
        allPrograms,
      },
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const UpdateProgram = async (req,res) => {
  try {
    const {programId , ...updatedData} = req.body;
    
    const program = await Program.findByPk(programId);

    program.set(updatedData);
    await program.save();
    res.send({
      message : "Data Updated Successfully",
      success : true,
      data : program
    });

  } catch (error) {
    res.send({
      message : error.message,
      success : false
    });
  }
};

const DeleteProgram = async(req,res) => {
  try {

    const program = await Program.findByPk(req.body.programId);
    await program.destroy();

    res.send({
      success : true,
      message : "Program Delete Successfully"
    });

  } catch (error) {
    res.send({
      message : error.message,
      success : false
    });
  }
};
module.exports = { UserLogin, UserRegister, AddProgram, GetUserDetails , UpdateProgram ,DeleteProgram};
