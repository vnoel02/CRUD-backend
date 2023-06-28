const express = require("express");
const router = express.Router();
const { Campuses } = require("../db/models");

// root of campuses ==> localhost:3000/api/campuses/

router.get("/", async (req, res, nex) => {
  try {
    const allCampuses = await Campuses.findAll();
    allCampuses
      ? res.status(200).json(allCampuses)
      : res.status(404).json("No campuses found"); // Might modify this since I have to display that no campuses are displayed
  } catch (error) {
    next(error);
  }
});

module.exports = router;