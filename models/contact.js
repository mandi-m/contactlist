// Contact Model

// Required libraries
const Sequelize = require('sequelize');

// Required files
const db = require('./_db');

// Defining Contact Table Model
const Contact = db.define('contact', {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
}
});

module.exports = Contact;
