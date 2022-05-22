const {DataTypes} = require('sequelize');

const sequelize = require('../utils/sequelize');

//const sequelize = connectDB();
const Student = sequelize.define('Student', {
    // uid : {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true // Automatically gets converted to SERIAL for postgres
    // },
  
    student_id : {
      type: DataTypes.INTEGER,
      //unique : true
    },
    name : {
      type: DataTypes.STRING,
      //unique : true
    },
    email: {
      type: DataTypes.STRING,
      //unique : true
    }, 
    level : {
      type: DataTypes.INTEGER,
      //unique : true
    },
    term : {
      type: DataTypes.INTEGER,
      //unique : true
    },
    password :{
      type: DataTypes.STRING
    }
  
  },{
    timestamps  :false
  });

module.exports = Student;