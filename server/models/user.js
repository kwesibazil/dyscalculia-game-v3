const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
  email: {
    trim: true,
    index: true, 
    type: String,
    unique: true,
    required: true
  },
  img: {
    trim: true,
    type: String,
    required: true,
    default: 'https://www.pinclipart.com/picdir/big/157-1578186_user-profile-default-image-png-clipart.png'
  },
  hash: {
    trim: true,
    type: String,
    minlength: 8,
    required: true
  },
  userRole: {
    trim: true,
    type: String,
    required: true,
    default: 'guest',
    enum : ['guest','admin'],
  }
},{timestamps: true, collection: "users"})

UserSchema.plugin(uniqueValidator, {message: 'user already exist.'})

module.exports = mongoose.model('User', UserSchema)


// validate: {
//   validator: function(v) {
//       return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
//   },
//   message: "Please enter a valid email"
// },