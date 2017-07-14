// API Router

// Required packages
const express = require('express');

// Required files
const routerContacts = require('./contacts');

// Router creation
const routerAPI = express.Router();
module.exports = routerAPI;

routerAPI.use('/contacts', routerContacts);
