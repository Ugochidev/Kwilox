 const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DrinkSchema = new Schema({
  DrinkName: {
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
  }
},
{
timestamps:true
}
);


const DrinkModel = mongoose.model("Drinks", DrinkSchema);


module.exports = DrinkModel;
