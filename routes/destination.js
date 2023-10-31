var express = require('express');
var router = express.Router();


const destinationCtrl = require('../controllers/destination');

router.post('/:id', destinationCtrl.create)

module.exports = router;