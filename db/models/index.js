// Also export my tables
const Campuses = require("./campuses");
const Students = require("./students");

// Establish relationship of student and student here
Students.belongsTo(Campuses, {
//   foreignKey: "campusID",
  as: "campus",
});
Campuses.hasMany(Students, {
  as: "students",
});

module.exports = { Campuses, Students };
