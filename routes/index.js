const routes = require('express').Router();
const controller = require('../controllers');
routes.get('/', controller.displayName);
module.exports = routes;