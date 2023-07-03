const express = require("express");
const router = express.Router();
const { Students } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    const allStudents = await Students.findAll({ include: "campus" });
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
      campusId: req.body.campusId,
    });
    newStudent
      ? res.status(200).json(newStudent)
      : res.status(404).json("No info provided");
  } catch (error) {
    next(error);
  }
});

// Delete - delete a student
router.delete("/delete/:id", async (req, res, next) => {
  try {
    const deleteStudent = await Students.destroy({
      where: { id: req.params.id },
    });
    deleteStudent
      ? res.status(200).json("deleted")
      : res.status(404).json("Nothing to delete");
  } catch (error) {
    next(error);
  }
});

// Get - single student
router.get("/get/:id", async (req, res, next) => {
  try {
    const singleStudent = await Students.findAll({
      where: { id: req.params.id },
    });
    singleStudent
      ? res.status(200).json(singleStudent)
      : res.status(404).json("Student not found");
  } catch (error) {
    next(error);
  }
});

// Put - update single student

router.put("/edit/:id", async (req, res, next) => {
  try {
    // updates student first name
    Students.update(
      { firstName: req.body.firstName },
      { where: { id: req.params.id } }
    );

    // updates student last name
    Students.update(
      { lastName: req.body.lastName },
      { where: { id: req.params.id } }
    );

    // updates student email
    Students.update(
      { email: req.body.email },
      { where: { id: req.params.id } }
    );

    // updates image url
    Students.update(
      { imageUrl: req.body.imageUrl },
      { where: { id: req.params.id } }
    );

    // updates campus via id
    const editStudent = Students.update(
      { campusId: req.body.campusId },
      { where: { id: req.params.id } }
    );
    editStudent
      ? res.status(200).json("is updated")
      : res.status(400).json("Can't edit");
  } catch (error) {
    next(error);
  }
});

// router.put("/edit/setcampus/:id/", async (req, res, next) => {
//   try {
//     const editStudentCampus = Students.update(
//       { campusId: req.body.campusId },
//       { where: { id: req.params.id } }
//     );
//     editStudentCampus
//       ? res.status(200).json("updated campus info")
//       : res.status(400).json("Can't edit");
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
