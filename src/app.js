const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
require("dotenv").config();

const adminRouter = require("./route/admin.router");
 app.use("/api/v1", adminRouter);
const PORT =2024
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
  console.log(`App is listening on PORT ${PORT}`);
});

connectDB();

// app.get("/", function (req, res, next) {
//  res.send("Hello World!");
// });
