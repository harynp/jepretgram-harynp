var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/userController')
var jwt = require('../helpers/jwtwebtoken')
/* GET users listing. */
router.get('/', userCtrl.findAll);
router.get('/info', jwt.isLogin, userCtrl.userInfo)
router.post('/register', userCtrl.create);
router.delete('/:id', userCtrl.delete);
router.post('/login', userCtrl.login);

module.exports = router;
