const userModel = require('../models/userModel.js');

const userSignUp = async (req, res) => {
  console.log('sign', req.body);
  const { name, email, password } = req.body;
  await userModel.create({ name: name, email: email, password: password });
  res.status(201).json({ success: 'User created successfully' });
};
const getHomePage = async (req, res) => {
  res.render('../pages/Home.ejs');
};

module.exports = { userSignUp, getHomePage };
