const Exception = require("../../exceptions/Exception");
const User = require("./users.model");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    // const user = await User.findById(req.user.id);
    // return user.orders
    console.log(user);
    if (user) {
      const token = jwt.sign(
        {
          data: {
            id: user._id,
            role: user.role,
          },
        },
        process.env.JWT_SECRET
      );
      res.send({ token });
    } else {
      next(new Exception("user not found", 400));
    }
  } catch (error) {
    next(new Exception(error.message, 400));
  }
};

module.exports = {
  login,
};
