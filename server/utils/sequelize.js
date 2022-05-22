const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
    database: 'obe',//process.env.POSTGRES_DB,
    username: 'anjum',//process.env.POSTGRES_USER,
    password: 'Anjum320',//process.env.POSTGRES_PASSWORD,
    host: 'localhost',//process.env.POSTGRES_HOST,
    port: 5432,//process.env.POSTGRES_PORT,
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
     },
  });

  module.exports = sequelize;