const Exception = require("../../exceptions/Exception");
const user = require("../users/users.model");

const getOrders = ('/:id', async (req, res, next) => {
  try {
    const user = await User.findbyID(req.user.id);
    if(user)
    {
        res.send(user.orders);
    } else {
        next(new Exception("User not found", 404));
    }

    
  } catch (error) {
    next(new Exception(error.message, 404));
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
      next(new Exception("ID not found, please enter a valid id", 404));
    }
  };

module.exports = {
  getOrders,
  postOrder
};
