const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true
  }, 
  description: {
    type: String,
  }, 
  quantity: {
    type: Number,
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;