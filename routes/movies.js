var express = require('express');
var router = express.Router();

const moviesCtrl = require('../controllers/movies');

/* GET movies listing. */
router.get('/new', moviesCtrl.new);

router.get('/index', moviesCtrl.index);

router.post('/', moviesCtrl.create);

module.exports = router;
