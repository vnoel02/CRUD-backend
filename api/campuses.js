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
    try {
        const newCampus = await Campuses.create({
            name: req.body.name,
            address: req.body.address,
            // imageUrl: req.body.imageUrl,
            description: req.body.description,
          });
          newCampus
          ? res.status(200).json(newCampus)
          : res.status(404).json("No info provided");


    } catch (error) {
        next(error);
    }
  

});

// Delete - delete a new campus, parameterized
router.delete("/delete/:id", async (req,res,next) => {
    try {
        const deleteCampus = await Campuses.destroy({where: {id : req.params.id}});
        deleteCampus 
        ? res.status(200).json("deleted")
        : res.status(404).json("Nothing to delete")
    } catch (error) {
        next(error);
    };
})
// Put - edit a new campus




module.exports = router;

// {
//     "name": "Brooklyn College",
//     "address": "2900 Bedford Ave, Brooklyn, NY 11210",
//     "description": "sample text"
// }
