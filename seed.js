// dummy data
const db = require("./db");
const {Campuses} = require("./db/models");

// name, imageUrl, address, description
const seedCampuses = [
    {name: "Brooklyn College", address: "2900 Bedford Ave, Brooklyn, NY 11210", description: "sample text" },
    {name: "Hunter College", address: "695 Park Ave, New York, NY 10065", description: "sample text"},
    {name: "Baruch College", address: "55 Lexington Ave, New York, NY 10010", description: "sample text"}
];

const seed = async () => {
    await Campuses.bulkCreate(seedCampuses);
    console.log("seed");

}

seed().then(() => process.exit());