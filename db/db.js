// connects sequelize with the CRUD_backend database
const { Sequelize } = require("sequelize");
const {name} = require("../package.json");
const {Pool} = require('pg')
require('dotenv').config();


const db = new Sequelize(process.env.DATABASE_URL, {
    logging: false,
    dialect: require('pg')
});
//postgres://localhost:5432/${name}
module.exports = db;