// dummy data
const db = require("./db");
const {Campuses} = require("./db/models");
const {Students} = require("./db/models");

// name, imageUrl, address, description
const seedCampuses = [
    {name: "Brooklyn College", address: "2900 Bedford Ave, Brooklyn, NY 11210", description: "sample text" },
    {name: "Hunter College", address: "695 Park Ave, New York, NY 10065", description: "sample text"},
    {name: "Baruch College", address: "55 Lexington Ave, New York, NY 10010", description: "sample text"}
];


const seedStudents = [
    {firstName: "Victor", lastName: "Noel", email: "vnoel@gmail.com", GPA: "3.5", campusId: 1},
    {firstName: "John", lastName: "Doe", email: "jdoe@gmail.com", GPA: "3.7", campusId: 1},
    {firstName: "Jane", lastName: "Doe", email: "jndoe@gmail.com", GPA: "4.0", campusId: 2},
    {firstName: "Godrick", lastName: "The Golden", email: "bearwitness@gmail.com", GPA: "2.0"}
]

const seed = async() => {
    await Campuses.bulkCreate(seedCampuses)
    await Students.bulkCreate(seedStudents);
    console.log("Creating seed");
}
seed().then(() => process.exit());