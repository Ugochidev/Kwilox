const express = require("express");
const Drinks = require("../controllers/admin.controller");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");

router.post(
  "/addGoods",
  authMiddleware.authorize,
  authMiddleware.isAdmin,
  Drinks.addGoods
);
router.get("/fetchGoods", Drinks.fetchGoods);
router.patch(
  "/updateGoods/:_id",
  authMiddleware.authorize,
  authMiddleware.isAdmin,
  Drinks.updateGoods
);
router.delete(
  "/removeGoods/:id",
  authMiddleware.authorize,
  authMiddleware.isAdmin,
  Drinks.deleteGoods
);

module.exports = router;
