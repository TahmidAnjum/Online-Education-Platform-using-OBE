const sequelize = require('../utils/sequelize');
const Course = require('./Course');
const Teacher = require('./Teacher');

const Mod_Teach = sequelize.define('Mod_Teach', {
    
  },{
    timestamps  :false
    
  });

Teacher.belongsToMany(Course, {through : Mod_Teach});
Course.belongsToMany(Teacher, {through : Mod_Teach});

module.exports = Mod_Teach;