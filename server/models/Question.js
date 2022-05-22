const {DataTypes} = require('sequelize');
const sequelize = require('../utils/sequelize');

const Course = require('./Course');

const Question = sequelize.define('Question', {
    // uid : {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true 
    // },
  
  },{
    timestamps  :false
  });


Course.hasMany(Question);
Question.belongsTo(Course);

module.exports = Question;