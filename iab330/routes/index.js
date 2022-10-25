var express = require('express');
const controllers = require('../controllers');
var router = express.Router();

const path = require("path");
require("dotenv").config({
    path: path.resolve(__dirname, '../.env')
});

//Get homepage
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express is running ' + process.env.MYNAME })
});

router.get('/', (req, res) => res.send('Welcome'))

router.get('/room', controllers.getAllRooms);

module.exports = router;