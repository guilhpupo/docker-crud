const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://admin:root123@postgres-database:5432/marketlist') 

sequelize.sync({alter: true})

module.exports = sequelize
