const {DataTypes} = require('sequelize');
const sequelize = require('../utils/sequelize');

const Student = require('./Student');
const Teacher = require('./Teacher');
const Course = require('./Course');

const Feedback = sequelize.define('Feedback', 
{ 
    description : 
    {
      type : DataTypes.STRING
    },
    flag :
    {
      type : DataTypes.INTEGER
    }
},
{
    timestamps  :false
});


Feedback.belongsTo(Student);
Student.hasMany(Feedback);

Feedback.belongsTo(Teacher);
Teacher.hasMany(Feedback);

Feedback.belongsTo(Course);
Course.hasMany(Feedback);

module.exports = Feedback;