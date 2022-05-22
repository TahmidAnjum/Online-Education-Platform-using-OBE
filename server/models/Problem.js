const {DataTypes} = require('sequelize');
const sequelize = require('../utils/sequelize');

const Question = require('./Question');

const Problem = sequelize.define('Problem', {
    // uid : {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true 
    // },
  
    numinQ :{
      type: DataTypes.INTEGER,
    },
  
    num :{
      type : DataTypes.STRING,
    },
    Description :{
      type : DataTypes.STRING,
    },
  
    marks : {
      type : DataTypes.DOUBLE
    }
  },{
    timestamps  :false
  });
  
Question.hasMany(Problem)
Problem.belongsTo(Question)


module.exports = Problem;