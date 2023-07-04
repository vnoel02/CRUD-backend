const express = require("express");
const router = express.Router();
const { Campuses, Students } = require("../db/models");

// root of campuses ==> localhost:3000/api/campuses/

router.get("/", async (req, res, next) => {
  try {
    const allCampuses = await Campuses.findAll({include: "students"});
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
router.delete("/delete/:id", async (req, res, next) => {
  try {
    const deleteCampus = await Campuses.destroy({
      where: { id: req.params.id },
    });
    deleteCampus
      ? res.status(200).json("deleted")
      : res.status(404).json("Nothing to delete");
  } catch (error) {
    next(error);
  }
});

// Get - get info of a single campus, parameterized

router.get("/get/:id", async (req, res, next) => {
  try {
    const singleCampus = await Campuses.findOne({
      where: { id: req.params.id },
      include: [
        "students"
      ]
    });
    singleCampus
      ? res.status(200).json(singleCampus)
      : res.status(404).json("Campus not found");
  } catch (error) {
    next(error);
  }
});
// Put - edit a new campus

router.put("/edit/:id", async (req, res, next) => {
  try {
    // updates campus name
    const editCampus = Campuses.update(
      { name: req.body.name },
      { where: { id: req.params.id } }
    );

    // updates image url
    Campuses.update(
      { imageUrl: req.body.imageUrl },
      { where: { id: req.params.id } }
    );

    // updates address
    Campuses.update(
      { address: req.body.address },
      { where: { id: req.params.id } }
    );

    // updates description
    Campuses.update(
      { description: req.body.description },
      { where: { id: req.params.id } }
    );

    editCampus
      ? res.status(200).json("Is updated")
      : res.status(400).json("Can't edit");
  } catch (error) {
    next(error);
  }
});

module.exports = router;

// {
//     "name": "Brooklyn College",
//     "address": "2900 Bedford Ave, Brooklyn, NY 11210",
//     "description": "sample text"
// }
