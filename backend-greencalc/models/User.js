const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
		name: {
				type: String,
				required: true,
				min: 6
		},
		phone: {
				type: Number,
				required: true,
				max:9999999999999,
				min:10000000
		},
		password:{
				type: String,
				required: true,
				max: 1024,
				min:6
		},
		created_at: {
				type: Date,
				default: Date.now()
		}
})

module.exports = mongoose.model('User',userSchema)