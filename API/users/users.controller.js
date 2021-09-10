const Exception = require("../../exceptions/Exception");
const User = require("./users.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (user) {
      if(user.password ===(await bcrypt.hash(req.body.password,process.env.SALT))){

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
      } else{
        next(new Exception("wrong password", 400));
      }
    } else {
      next(new Exception("user not found", 400));
    }
  } catch (error) {
    next(new Exception(error.message, 400));
  }
};

const register = async (req, res, next) => {
  try {
    const user = new User({
      email: req.body.email,
      password: (await bcrypt.hash(req.body.password,process.env.SALT)),
      name: req.body.name,
    });
    await user.save();
    const token = jwt.sign(
      {
        data: {
          id: user._id,
          role: user.role,
        },
      },
      process.env.JWT_SECRET,
      {
        expiresIn:'1h'
      }
    );
    res.send({ token });
  } catch (error) {
    next(new Exception(error.message, 400));
  }
};

module.exports = {
  login,
  register,
};
