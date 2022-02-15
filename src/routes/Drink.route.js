const express = require("express");
const Drink = require("../controllers/Drink.controller");
const router = express.Router();
router.post("/addGoods", Drink.addGoods);
router.get("/fetchGoods", Drink.fetchGoods);
router.patch("/updateGoods", Drink.updateGoods);
router.delete("/removeGoods", Drink.deleteGoods);
module.exports = router;
