'use strict';

const express = require('express');
let api = express.Router();

const helloWorldController = require('../controllers/helloWorld.controller');

// '/hello-world/'

/**
 * POST
 */

 api.post('/hello-world/', helloWorldController.postHello);

 /**
 * GET
 */

api.get('/hello-world/', helloWorldController.getAllHello);
api.get('/hello-world/:id', helloWorldController.getHello);

 /**
 * PUT
 */

api.put('/hello-world/:id', helloWorldController.putHello);

 /**
 * DEL
 */

api.delete('/hello-world/:id', helloWorldController.delHello);

module.exports = api;