const sequelize = require('../utils/sequelize');
const Course = require('./Course');
const Teacher = require('./Teacher');

const Qmod_Teach = sequelize.define('Qmod_Teach', {
    
  },{
    timestamps  :false
    
  });

Teacher.belongsToMany(Course, {through : Qmod_Teach});
Course.belongsToMany(Teacher, {through : Qmod_Teach});

module.exports = Qmod_Teach;