const express = require("express");
const Drinks = require("../controllers/Drink.controller");
const router = express.Router();
router.post("/addGoods", Drinks.addGoods);
router.get("/fetchGoods", Drinks.fetchGoods);
router.patch("/updateGoods/:_id", Drinks.updateGoods);
router.delete("/removeGoods/:id", Drinks.deleteGoods);
module.exports = router;
