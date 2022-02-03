const Goods = require("../models/Drinks.model");
const mongoose = require("mongoose");

exports.addGoods = async (req, res, next) => {
  try {
    const { Drinksname, manufacturerCompany, quantityAvailable, expiryDate } =
      req.body;

    const newGoods = new Goods({
      Drinksname,
      manufacturerCompany,
      quantityAvailable,
      expiryDate,
    });
    await newGoods.save();
    return res.status(201).json({
      success: true,
      newGoods,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "OOPS Error",
    });
  }
};
exports.fetchGoods = async (req, res, next) => {
  try {
    const fetchGoods = await Goods.find();
    return res.status(200).json({
      success: true,
      fetchGoods,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

exports.updateGoods = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const goodsUpdate = await Goods.findOneAndUpdate({ _id: _id }, req.body, {
      new: true,
    });
    return res.status(200).json({
      success: true,
      goodsUpdate,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

exports.deleteGoods = async (req, res, next) => {
  try {
    const { id } = req.params;
    const removeGoods = await Goods.findOneAndDelete({ _id: id });
    return res.status(200).json({
      success: true,
      removeGoods,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
