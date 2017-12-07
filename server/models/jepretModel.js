const mongoose = require('mongoose')
const Schema   = mongoose.Schema

var jepretgramSchema = new Schema({
	title    : String,
  caption  : String,
	imgUrl	 : String,
  userId   : {
		type: Schema.Types.ObjectId,
		ref : 'User'
	},
	createdAt: Date,
	updatedAt: Date
})

var Jepretgram = mongoose.model('Jepretgram', jepretgramSchema)

module.exports = Jepretgram
