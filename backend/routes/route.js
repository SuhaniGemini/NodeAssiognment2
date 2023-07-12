const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
const userModel = require("../models/model")

router.get("/", (req, res) => {
    res.send("Running");
  });
  router.get("/users", async (req, res) => {
    try {
      const users = await userModel.find({});
      res.status(200).json(users);
    } catch (err) {
      res.status(500).send({ message: "Internal Server Error" });
    }
  });
  
  router.get("/getusers/:id", async (req, res) => {
    const { id } = req.params;
    res.json(await userModel.findById(id));
  });
  
  router.post("/login", async (req, res) => {
    try {
      const { name, gender, phone, email,category, tech } = req.body;
      const usercontent = new userModel(req.body);
      const save = await usercontent.save();
    } catch (err) {
      res.status(500).send({ message: "Internal Server Error" });
    }
  });
  //Delete functionality
  router.delete("/user/:id", async (req, res) => {
    const { id } = req.params;

    res.json(await userModel.findByIdAndDelete(id));
  });
  //Update functionality
  router.put("/update/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { name, gender, phone, email,category, tech } = req.body;
      const updatedUser = await userModel.findByIdAndUpdate(
        id,
        {
          name,
          gender,
          email,
          phone,
          category,
          tech,
        },
        { new: true }
      );
      res.json(updatedUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to update user" });
    }
  });

  module.exports = router;