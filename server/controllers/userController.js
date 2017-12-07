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
}

module.exports = UserCtrl
