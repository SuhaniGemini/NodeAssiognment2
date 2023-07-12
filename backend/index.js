const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const routes = require("./routes/route.js")
const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
const PORT = process.env.PORT || 8000;

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb+srv://abcd:efgh@assignmentdata.d7quf4q.mongodb.net/")
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));


app.use("/details", routes)
app.listen(PORT, () => console.log("Server is running on port " + PORT));
