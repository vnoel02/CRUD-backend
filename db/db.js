// connects sequelize with the CRUD_backend database
const { Sequelize } = require("sequelize");
const {name} = require("../package.json");
const {pg} = require("pg")

const db = new Sequelize(`postgres://localhost:5432/${name}`, {
    logging: false,
});

module.exports = db;