var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/userController')
/* GET users listing. */
router.get('/', userCtrl.findAll);
router.get('/:id', userCtrl.findById);
router.post('/', userCtrl.create);
router.delete('/:id', userCtrl.delete);

module.exports = router;
