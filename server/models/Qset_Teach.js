const sequelize = require('../utils/sequelize');
const Course = require('./Course');
const Teacher = require('./Teacher');

const Qset_Teach = sequelize.define('Qset_Teach', {
    
  },{
    timestamps  :false
    
  });

Teacher.belongsToMany(Course, {through : Qset_Teach});
Course.belongsToMany(Teacher, {through : Qset_Teach});

module.exports = Qset_Teach;