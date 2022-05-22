const {DataTypes} = require('sequelize');
const sequelize = require('../utils/sequelize');
const Student_Course = require('./Student_Course');

const Grade = sequelize.define('Grade',{
    // uid : {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true 
    // }, 
    marks : {
      type : DataTypes.DOUBLE
    },
    GPA : {
      type : DataTypes.DOUBLE
    }
  },{ 
    timestamps  :false
  });
  
  

Grade.belongsTo(Student_Course);
Student_Course.hasOne(Grade);

module.exports = Grade;