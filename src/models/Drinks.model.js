const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DrinksSchema = new Schema({
  DrinksName: {
    type: String,
    required: true
  },
  manufacturerCompany: {
    type: String,
    required: true
  },
  quantityAvailable: {
    type: Number,
    required: true
  },
  expiryDate: {
    type: Date,
    required: true
  },
});


const DrinksModel = mongoose.model("Drinks", DrinksSchema);


module.exports = DrinksModel;
