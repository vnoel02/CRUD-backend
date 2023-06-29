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
router.post("/", async (req, res, next) => {
    // const name = req.query.name;
    // const address = req.query.address;
    // const description = req.query.description;
    
    
    try {
        const newCampus = await Campuses.create({
            name: req.body.name,
            address: req.body.address,
            description: req.body.description,
          });
          newCampus
          ? res.status(200).json(newCampus)
          : res.status(404).json("No info provided");


    } catch (error) {
        next(error);
    }
  

});
//{name: "Brooklyn College", address: "2900 Bedford Ave, Brooklyn, NY 11210", description: "sample text" }
module.exports = router;

// {
//     "name": "Brooklyn College",
//     "address": "2900 Bedford Ave, Brooklyn, NY 11210",
//     "description": "sample text"
// }
