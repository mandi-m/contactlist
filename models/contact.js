// Contact Model

// Required libraries
const Sequelize = require('sequelize');

// Required files
const db = require('./_db');

// Defining Contact Table Model
const Contact = db.define('contact', {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
}
});

module.exports = Contact;
