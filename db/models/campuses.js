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
        defaultValue: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/2016_Brooklyn_College_Library.jpg/1920px-2016_Brooklyn_College_Library.jpg"
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