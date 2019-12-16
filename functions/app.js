'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const paginate = require('express-paginate');

//End Point base
const versionAPI = 'v1';
const baseEndPoint = '/api/' + versionAPI;

//Crea instancia del servidor
const app = express();

//Import Routes
const default_routes = require('./routes/default.route');
const hello_world_routes = require('./routes/helloWorld.route');

//Configure cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Rutas / End Points
app.use(hello_world_routes, default_routes);



//Default Routes
app.use(baseEndPoint, default_routes);
app.use('/', default_routes);

//Export module
module.exports = app;