const mongoose = require("mongoose");
const { isEmail } = require("validator");
const { roles } = require("../../utils/enums");
const cartSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  qty: {
    type: number,
    required: true,
  },
  price: {
    type: number,
    required: true,
  },
});
const orderSchema = new mongoose.Schema({
  address: {
    type: String,
    required: [true, "please enter an address"],
    minlength: [10, "please enter a valid detailed address"],
  },
  totalPrice: {
    type: number,
    required: [true, "total price is required"],
    min: [1, "total price must be postive number"],
  },
  orderedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  cart: {
    type: [cartSchema],
    required: true,
  },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter your name"],
    minlength: [5, "please enter your full name"],
  },
  email: {
    type: String,
    required: [true, "please enter your name"],
    validate: [isEmail, " please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "please enter a password"],
    minlength: [8, "password must be at least 8 chars"],
  },
  role: {
    type: String,
    enum: [roles.ADMIN, roles.USER],
    default: roles.USER,
  },
  orders: [orderSchema],
});

const User = mongoose.model("user", userSchema);

module.exports = User;
