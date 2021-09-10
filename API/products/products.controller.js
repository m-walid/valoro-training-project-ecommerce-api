const Exception = require("../../exceptions/Exception");
const Product = require("./products.model");
const router = require("./products.routes");

//getting all
const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.send({
      message: "Products fetched successfully.", products
  })
  } catch (error) {
    next(new Exception(error.message, 400));
  }
};


//getting one 
const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product == null) {
      next(new Exception(error.message, 404))
    }
    res.send({
      message: "Product fetched successfully.", products
  })
  } catch (error) {
    next(new Exception(error.message, 500));
  }
};

//posting product
const postProduct = async (req, res, next) =>{
  const product = new Product(req.body)

  try{
    await product.save()
    res.send({
      message: "Product posted successfully."
  })
  } catch (error) {
    next(new Exception("couldn't post product", 401))
  }
}

//editing product
const editProduct = async(req, res, next) => {
  try {
    const product = await Product.findById(req.params.id)
    if(product == null){
      next(new Exception(error.message, 404))
    }
    if(req.body.title != null){
      res.product.title = req.body.title
    }

    if(req.body.price != null){
      res.product.price = req.body.price
    }

    if(req.body.description != null){
      res.product.description = req.body.description
    }

    if(req.body.img != null){
      res.product.img = req.body.img
    }

    if(req.body.quantity != null){
      res.product.quantity = req.body.quantity
    }
    const updatedProduct = await res.product.save()
    res.send({
      message: "Product updated successfully.", updatedProduct
  })
  } catch (error) {
    next(new Exception(error.message, 500))
  }
}

//deleting product
const deleteProduct =  async(req, res, next) => {
  try {
    const product = await Product.findById(req.params.id)
    product.remove()
    res.send({
      message: "Product deleted successfully."
  })
  } catch (error) {
    next(new Exception(error.message, 400))
  }
}

module.exports = {
  getProducts,
  getProduct,
  postProduct,
  editProduct,
  deleteProduct
};
