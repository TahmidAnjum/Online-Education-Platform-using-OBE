const sequelize = require('../utils/sequelize');
const Course = require('./Course');
const Student = require('./Student');

const Student_Course = sequelize.define('Student_Course', {
    
  },{
    timestamps  :false
    
  });

Student.belongsToMany(Course, {through : Student_Course});
Course.belongsToMany(Student, {through : Student_Course});

module.exports = Student_Course;