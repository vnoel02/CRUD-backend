const express = require("express");
const router = express.Router();
const { Campuses } = require("../db/models");

// root of campuses ==> localhost:3000/api/campuses/

router.get("/", async (req, res, next) => {
  try {
    const allCampuses = await Campuses.findAll();
    allCampuses
      ? res.status(200).json(allCampuses)
      : res.status(404).json("No campuses found"); // Might modify this since I have to display that no campuses are displayed
  } catch (error) {
    next(error);
  }
});


//Post - create an new campus
router.post("/", async(req, res, next) => {
    const newCampus = await Campuses.create(req.body).then(() => {
        res.send("A new Campus has been inserted")
    })
})

module.exports = router;