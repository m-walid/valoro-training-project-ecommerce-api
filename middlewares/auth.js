const jwt = require("jsonwebtoken");
const Exception = require("../exceptions/Exception");

module.exports = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) next(new Exception("please login", 401));
     else {
    jwt.verify(token, process.env.JWT_SECRET, (err, res) => {
      if (err) next(new Exception("invalid token please login again", 403));
      else {
        req.user = res.data;
        next();
      }
    });
  }
};
