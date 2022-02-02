const express = require("express");
const Admin = require("../controller/admin.controller");
const router = express.Router();
router.post("/addGoods", Admin.addGoods);
router.get("/fetchGoods", Admin.fetchGoods);
router.patch("/updateGoods/:_id", Admin.updateGoods);
router.delete("/removeGoods/:id", Admin.deleteGoods);


module.exports = router;
