const express = require("express");
const uploadDrinks = require("../controllers/Drinks.controller");

const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/loadDrinks", 
authMiddleware.authorize,
 authMiddleware.isAdmin);

module.exports = router;
