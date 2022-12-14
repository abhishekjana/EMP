const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//const TOKEN_SECRET = "ancgdryddjegekkdjfblph";
require("dotenv").config();

router.post("/register", async (req, res) => {
  //checking user email id in database
  const emailExit = await User.findOne({
    email: req.body.email,
  });

  if (emailExit) return res.status(400).send("Email already exists");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //create new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    role: "employee",
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

//User Login Api
router.post("/login", async (req, res) => {
  //checking user email id in database

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email is wrong");

  //checking password
  const validPass = await bcrypt.compare(req.body.password, user.password);

  if (!validPass) return res.status(400).send("Invalid password");

  //create and assign a token
  // const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send({ token: token, role: user.role });
  //res.header("UserType", role).send({ role: user.role });
});

module.exports = router;
