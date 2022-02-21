const express = require("express");
const req = require("express/lib/request");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
require("dotenv").config();

const PORT = process.env.PORT;

const DrinkRouter = require("./routes/Drink.route");

app.get("/", (req, res) =>{
  res.send("welcome to home page")
})
app.use("/api/v1", DrinkRouter);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is connected");
  } catch (error) {
    console.log(`Database Not Connected`);
  }
};

app.listen(PORT, () => {
  console.log(`App is listening t0 PORT ${PORT}`);
});
connectDB();
