const { Sequelize, DataTypes } = require('sequelize');

// Connect to database
const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'jdmj91',
  port: 5432,
  database: 'entregable1',
  logging: false,
});

module.exports = { db, DataTypes };