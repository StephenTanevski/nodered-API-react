const express = require('express');
const routes = require('../routes');

const server = express();
server.use(express.json());
// Routing used for /api
server.use('/api', routes);

module.exports = server;