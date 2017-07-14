// Contacts Routes

// Required libraries
const routerContacts = require('express').Router();
module.exports = routerContacts;

// Required files
const Contacts = require('../models/contact');

// Routes

routerContacts.post('/', (req, res, next) => {
  Contacts.create(req.body)
    .then((createdContact) => {
      res.status(200).send(createdContact);
    })
    .catch(next);
});

routerContacts.get('/', (req, res, next) => {
  Contacts.findAll({})
    .then((foundContacts) => {
      res.status(200).send(foundContacts);
    })
    .catch(next);
});