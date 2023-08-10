const express = require('express');
const {
  userSignUp,
  getHomePage,
  userLogin,
} = require('../controllers/userController.js');
const router = express.Router({ mergeParams: true });

router.post('/signup', userSignUp);
router.get('/signup', (req, res) => {
  res.render('../pages/SignUp.ejs');
});
router.post('/login', userLogin);
router.get('/login', (req, res) => {
  res.render('../pages/Login.ejs');
});
router.get('/ShortenUrl', (req, res) => {
  res.render('../pages/ShortenUrl.ejs');
});
router.get('/', getHomePage);

module.exports = router;
