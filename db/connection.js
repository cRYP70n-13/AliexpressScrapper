const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config({ path: '../config/config.env' });

const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const DIALECT = 'mysql';
const DB = 'aliexpress_scrapper';

module.exports =  new Sequelize(DB, USER, PASSWORD, {
	host: process.env.DB_HOST,
	dialect: DIALECT,
	operatorsAliases: false,

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	},
});
