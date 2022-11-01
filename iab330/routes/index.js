var express = require('express');
const controllers = require('../controllers');
var router = express.Router();

// Configures dotenv
const path = require("path");
require("dotenv").config({
    path: path.resolve(__dirname, '../.env')
});

//Get homepage
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express is running ' + process.env.MYNAME })
});

// Sending welcome to /
router.get('/', (req, res) => res.send('Welcome'))

// getting all Rooms
router.get('/room', controllers.getAllRooms);

module.exports = router;