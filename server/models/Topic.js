const {DataTypes} = require('sequelize');
const sequelize = require('../utils/sequelize');

const Topic = sequelize.define('Topic', {
    // uid : {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true 
    // },
  
    name : {
      type: DataTypes.STRING,
    },
    // status :
    // {
    //   type : DataTypes.INTEGER,
    //   defaultValue :1,
    //   //primaryKey: true
    // }
  },{
    timestamps  :false
  });
  


module.exports = Topic;