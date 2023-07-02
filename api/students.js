const express = require("express");
const router = express.Router();
const { Students } = require("../db/models");

router.get("/", async (req, res, next) => {
    try {
      const allStudents = await Students.findAll({include: "campus"});
      allStudents
        ? res.status(200).json(allStudents)
        : res.status(404).json("Can't find any students"); // Might modify this since I have to display that no campuses are displayed
    } catch (error) {
      next(error);
    }
  });

  module.exports = router;