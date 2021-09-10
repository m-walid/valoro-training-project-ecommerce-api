const Exception = require("../../exceptions/Exception");
const user = require("../users/users.model");

const getOrders = ('/:id', async (req, res, next) => {
  try {
    const user = await User.findbyID(req.user.id);
    if(user)
    {
        res.send(user.orders);
    } else {
        next(new Exception("User not found", 400));
    }

    
  } catch (error) {
    next(new Exception(error.message, 400));
  }
});


const postOrder =  async (req, res, next) => {
    try {

      const user = await User.findbyID(req.user.id); 
      user.order.push(req.body);

      await user.save();
      res.send({
          message: "Order saved successfully."
      });
    
    } catch (error) {
      next(new Exception(error.message, 400));
    }
  };

module.exports = {
  getOrders,
  postOrder
};
