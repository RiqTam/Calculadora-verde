const router = require("express").Router();
const User = require("../models/User");
const { registerValidation, loginValidation } = require("./validation");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const phoneExist = await User.findOne({ phone: req.body.phone });
  if (phoneExist) {
    return res.status(400).send("Phone already taken");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    phone: req.body.phone,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const user = await User.findOne({ phone: req.body.phone });
  if (!user) {
    return res.status(400).send("Phone or password is wrong");
  }
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
    return res.status(400).send("Phone or password is wrong");
  }
  const token = jwt.sign({_id: user.id}, process.env.TOKEN_SECRET);
  res.header('auth-token',token).json({
      name: user.name,
      phone: user.phone,
	  token: token
  });
});

module.exports = router;
