//const {DataTypes} = require('sequelize');
const sequelize = require('../utils/sequelize');
const Course = require('./Course');
const Topic = require('./Topic');

const Topic_Course = sequelize.define('Topic_Course', {
    
  },{
    timestamps  :false
    
  });

Topic.belongsToMany(Course, {through : Topic_Course});
Course.belongsToMany(Topic, {through : Topic_Course});

module.exports = Topic_Course;