const {DataTypes} = require('sequelize');
const sequelize = require('../utils/sequelize');

const Course = sequelize.define('Course', {
    // uid : {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true // Automatically gets converted to SERIAL for postgres
    // },

    title : {
        type: DataTypes.STRING,
        //unique : true
    },
    name : {
        type: DataTypes.STRING,
        //unique : true
    },
    credit_hours :{
        type: DataTypes.DOUBLE,
    },
    year : {
        type: DataTypes.INTEGER,
        //unique : true
    }, 
    level : {
        type: DataTypes.INTEGER,
        //unique : true
    },
    term : {
        type: DataTypes.INTEGER,
        //unique : true
    }


    },{
    timestamps  :false
});

module.exports = Course;