var express = require('express');
var router = express.Router();
var FormsController = require('../controllers/FormsController');
/* GET home page. */
router.get('/', function(req, res, next) {
  FormsController.getForm(req, res);
});

router.post('/create', function(req, res, next) {
  FormsController.createForm(req, res);
});

router.put('/update/:id', function(req, res, next) {
  FormsController.updateForm(req, res);
});

module.exports = router;
