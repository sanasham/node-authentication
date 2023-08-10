const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please enter a username'],
  },
  email: {
    type: String,
    required: [true, 'please enter a email address'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'please enter a password'],
  },
});
const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
