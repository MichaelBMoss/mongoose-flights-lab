var express = require('express');
var router = express.Router();


const ticketCtrl = require('../controllers/ticket');

router.post('/:id', ticketCtrl.create)

module.exports = router;