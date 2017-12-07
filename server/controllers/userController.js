const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

class UserCtrl {

  static create(req, res) {
    var hash = bcrypt.hashSync(req.body.password, salt)
    User.create({
      username: req.body.username,
      password: hash
    })
    .then(user => res.status(200).send(user))
    .catch(err => res.status(500).send(err))
  }

  static findAll (req,res) {
    User.find()
    .then(user => res.status(200).send(user))
    .catch(err => res.status(500).send(err))
  }

  static findById (req,res) {
    User.findOne({_id: req.params.id})
    .then(user => res.status(200).send(user))
    .catch(err => res.status(500).send(err))
  }

  static delete (req,res) {
    User.remove({_id: req.params.id})
    .then(user => res.status(200).send(user))
    .catch(err => res.status(500).send(err))
  }

  static login (req,res) {
    User.findOne({username: req.body.username})
    .then(data => {
      if (bcrypt.compareSync(req.body.password, data.password)) {
        var token = jwt.sign({
          id       : data._id,
          username : data.username
        }, process.env.SECRET_KEY)
        res.send(token)
      } else{
        res.send('Wrong Password')
      }
    })
    .catch(err=>{
      res.send('username tidak ditemukan')
    })
  }

  static verify (req,res,next) {
    jwt.verify(req.body.token, process.env.SECRET_KEY,(err,decoded)=>{
      if(!err){
        req.locals = decoded
        next()
      }
      else{
        console.log(err)
      }
    })
  }

  static userInfo (req,res) {
    res.send(req.locals)
  }

}

module.exports = UserCtrl
