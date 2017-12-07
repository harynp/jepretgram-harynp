const Jepret = require('../models/jepretModel')

class JepretCtrl {
  static findAll (req,res) {
    Jepret.find()
    .populate('userId')
    .then(data => res.send(data))
    .catch(err => res.send(err))
  }

  static findById (req,res) {
    Jepret.findOne({_id: req.params.id})
    .populate('userId')
    .then(data => res.send(data))
    .catch(err => res.send(err))
  }

  static create (req,res) {
    Jepret.create({
      title: req.body.title,
      caption: req.body.caption,
      imgUrl: req.file.cloudStoragePublicUrl
    })
    .then(data => res.send(data))
    .catch(err => res.send(err))
  }

  static delete (req,res) {
    Jepret.remove({_id: req.params.id})
    .then(data => res.send(data))
    .catch(err => res.send(err))
  }

  static edit (req,res) {
    Jepret.findOneAndUpdate({_id:req.params.id}, {
      $set: {
        title     : req.body.title,
        caption   : req.body.caption,
        imgUrl    : req.body.imgUrl,
        updatedAt : new Date()
      }
    }, {new: true})
      .then(data => res.send(data))
      .catch(err => res.send(err))
  }

  static edit(req, res) {
    Jepret.findOneAndUpdate({_id: req.params.id}, {
        $set: {
          title     : req.body.title,
          content   : req.body.content
        }
      }, {new: true})
      .then(result => {
        res.status(200).send(result)
      })
      .catch(err => {
        res.status(500).send(err)
      })
  }

}

module.exports = JepretCtrl
