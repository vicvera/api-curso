'use strict';

let express = require('express');
let api = express.Router();

// 404 Error page
api.get('*', (req, res) => {
    return res.status(404).send({
        message: 'No se encontro'
    });
});

module.exports = api;