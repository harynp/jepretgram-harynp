const jwt = require('jsonwebtoken')

function isLogin (req,res,next) {
  jwt.verify(req.headers.token, process.env.SECRET_KEY,(err,decoded) => {
    if (!err) {
      req.locals = decoded
      next()
    } else {
      res.send(err)
    }
  })
}

function authUser (req,res,next) {
  if (req.locals.id === req.params.id) {
    next()
  } else if (req.locals.id === req.body.id) {
    next()
  } else {
    res.send('Access Denied')
  }
}

module.exports = {
  isLogin,
  authUser
}
