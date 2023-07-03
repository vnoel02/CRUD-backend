// Students table
const {DataTypes} = require("sequelize");
const db = require("../db");

const Students = db.define("students", {
    firstName: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    lastName: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    imageUrl: {
        type: DataTypes.TEXT,
        defaultValue: "https://as2.ftcdn.net/v2/jpg/00/64/67/63/1000_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
        validate: {
            isUrl:true
        }
    },
    GPA: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate: {
            isDecimal: true,
            max: 4.0,
            min: 0.0
        }
    },
    // campusID: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true
    // }
})

module.exports = Students;