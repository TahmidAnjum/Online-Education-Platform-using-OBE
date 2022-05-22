const {DataTypes} = require('sequelize');

const sequelize = require('../utils/sequelize');

const Teacher = sequelize.define('Teacher', 
{       
    name : 
    {
      type: DataTypes.STRING,
      //unique : true
    },
    email: 
    {
      type: DataTypes.STRING,
      //unique : true
    }, 
    designation: 
    {
      type: DataTypes.STRING,
      //unique : true
    }, 
    password :
    {
      type: DataTypes.STRING
    }
  
  },{
    timestamps  :false
  });


module.exports = Teacher;