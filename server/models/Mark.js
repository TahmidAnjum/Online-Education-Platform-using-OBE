const {DataTypes} = require('sequelize');
const sequelize = require('../utils/sequelize');

const Mark = sequelize.define('Mark', {
    // uid : {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true 
    // },
  
    marks : {
      type : DataTypes.DOUBLE
    }
  },{
    timestamps  :false
  });
  
  

module.exports = Mark;