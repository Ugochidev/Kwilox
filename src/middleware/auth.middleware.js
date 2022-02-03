const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.authorize = async (req, res, next) => {
  try {
    let authorizationArr = req.headers.authorization.split(" ");
    if (!authorizationArr.includes("Bearer")) {
      return res.status(401).json({
        success: false,
        message: "Bearer required",
      });
    }
    let token = authorizationArr[1];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token is required",
      });
    }
    console.log(token);
    const decryptToken = await jwt.verify(token, process.env.TOKEN, {
      expiresIn: "30mins",
    });
    req.user = decryptToken;
    next();
  } catch (error) {
    console.log(error=Message)
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};


exports.isAdmin = async (req, res, next) => {
  try {
    if (req.user.role === "Admin") {
      next();
    } else {
      return res.status(401).json({
        success: false,
        message: "User has no access",
      });
    }
  } catch (error) {}
};