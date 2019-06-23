// UTILISÉ POUR LE TP2

const express = require('express');
const controller = require('./author.controller');
const { isAuthenticatedMiddleware } = require('../auth/auth.config');

const router = express.Router();

router
    .get('/', controller.findAll)
    .get('/:id', controller.find)
    .post('/', controller.create)
    .put('/:id', controller.update)
    .delete('/:id', isAuthenticatedMiddleware, controller.remove);

module.exports = router;
