const Sequelize = require('sequelize');
const db = require('../db/connection');

const Product = db.define('product', {
    title: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.STRING
    },
    variations: {
        type: Sequelize.STRING
    }
});

Product.sync().then(() => {
    console.log('table created');
});

module.exports = Product;