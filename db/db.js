// connects sequelize with the CRUD_backend database
const { Sequelize } = require("sequelize");
const {name} = require("../package.json");
const {Pool} = require('pg')

const db = new Sequelize(`postgres://localhost:5432/${name}`, {
    logging: false,
    dialect: require('pg')
});

module.exports = db;