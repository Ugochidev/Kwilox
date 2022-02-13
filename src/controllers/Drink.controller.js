const Goods = require("../models/Drink.model");
const mongoose = require("mongoose");

//  Posting goods to the database

exports.addGoods = async (req, res, next) => {
  try {
    const { DrinkName, manufacturerCompany, quantityAvailable, expiryDate } =
      req.body;
    if (
      !DrinkName ||
      !manufacturerCompany ||
      !quantityAvailable ||
      !expiryDate
    ) {
      return res.status(401).json({
        message: "Please fill all the required field",
      });
    }

    const newGoods = new Goods({
      DrinkName,
      manufacturerCompany,
      quantityAvailable,
      expiryDate,
    });
    await newGoods.save();
    return res.status(201).json({
      newGoods,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

//  Getting goods from the database

exports.fetchGoods = async (req, res, next) => {
  try {
    const fetchGoods = await Goods.find();
    return res.status(200).json({
      fetchGoods,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

//  Updating/editting goods in the database

exports.updateGoods = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const goodsUpdate = await Goods.findOneAndUpdate({ _id: _id }, req.body);
    return res.status(200).json({
      goodsUpdate,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

//  deleting goods in the database

exports.deleteGoods = async (req, res, next) => {
  try {
    const { id } = req.params;
    const removeGoods = await Goods.findOneAndDelete({ _id: id });
    return res.status(200).json({
      message: "goods deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
