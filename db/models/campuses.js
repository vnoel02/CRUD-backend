//Campus table
const {DataTypes} = require("sequelize");
const db = require("../db");

const Campuses = db.define("campuses", {
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    imageUrl: {
        type: DataTypes.TEXT,
        defaultValue: "https://www.brooklyn.cuny.edu/web/com_socialImages/BrooklynCollegeLibrary_1200x628.jpg"
    },

    address: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = Campuses;