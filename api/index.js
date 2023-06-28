const router = require("express").Router();

// Mounted on /api/
router.use("/campuses", require("./campuses"));

//404 handling
router.use((req,res,next) => {
    const error = new Error("404 Not Found");
    error.status = 404;
    next(error);

});

// importing router to campuses and students
module.exports = router;