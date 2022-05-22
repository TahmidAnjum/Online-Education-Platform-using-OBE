const sequelize = require('../utils/sequelize');
const Course = require('./Course');
const Teacher = require('./Teacher');

const Course_Teach = sequelize.define('Course_Teach', {
    
  },{
    timestamps  :false
    
  });

Teacher.belongsToMany(Course, {through : Course_Teach});
Course.belongsToMany(Teacher, {through : Course_Teach});

module.exports = Course_Teach;