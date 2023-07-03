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

  // Post - create a new student
  router.post("/newstudent", async (req, res, next) => {
    try {
      const newStudent = await Students.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        address: req.body.address,
        GPA: req.body.GPA,
        campusId: req.body.campusId
      });
      newStudent
        ? res.status(200).json(newStudent)
        : res.status(404).json("No info provided");
    } catch (error) {
      next(error);
    }
  });

  module.exports = router;