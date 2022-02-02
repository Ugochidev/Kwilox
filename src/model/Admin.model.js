const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  name: {
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


const AdminModel = mongoose.model("Admin", adminSchema);


module.exports = AdminModel;
