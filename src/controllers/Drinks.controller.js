const Drinks = require("../models/Drinks.model");

exports.UploadDrinks= async (req, res, next) => {
  try {
    const { DrinksName, manufacturerCompany, quantityAvailable, expiryDate } =
      req.body;
    const newDrinks = await new Drinks({
      DrinksName,
      manufacturerCompany,
      quantityAvailable,
      expiryDate
    });
    return res.status(201).json({
      success: true,
      message: "Drinks are Available",
      newDrinks,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Err",
    });
  }
};
