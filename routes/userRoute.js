const express = require('express');
const { userSignUp, getHomePage } = require('../controllers/userController.js');
const router = express.Router({ mergeParams: true });

router.post('/signup', userSignUp);
router.get('/signup', (req, res) => {
  res.render('../pages/SignUp.ejs');
});
router.get('/login', (req, res) => {
  res.render('../pages/Login.ejs');
});
router.get('/', getHomePage);

module.exports = router;
