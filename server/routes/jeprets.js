var express = require('express');
var router = express.Router();
var jepretCtrl = require('../controllers/jepretController')
var jwt = require('../helpers/jwtwebtoken')
/* GET users listing. */
router.get('/', jepretCtrl.findAll);
router.get('/:id', jwt.isLogin, jepretCtrl.findById)
router.post('/', jwt.isLogin, jwt.authUser, jepretCtrl.create);
router.delete('/:id', jwt.isLogin, jwt.authUser, jepretCtrl.delete);
router.put('/:id', jwt.isLogin, jwt.authUser, jepretCtrl.edit)

module.exports = router;
