const Exception = require("../../exceptions/Exception");
const Product = require("./products.model");
const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    next(new Exception(error.message, 400));
  }
};

module.exports = {
  getProducts,
};
