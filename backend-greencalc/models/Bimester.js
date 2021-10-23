const mongoose = require('mongoose');

const bimesterSchema = new mongoose.Schema({

	gasto_luz: {
		type:Number,
		default:0,
		min: 0
	},
	gasto_gasolina: {
		type:Number,
		default:0,
		min: 0
	},
	gasto_gas: {
		type:Number,
		default:0,
		min: 0
	},
	gasto_agua: {
		type:Number,
		default:0,
		min: 0
	},
	co2_emitido: {
		type:Number,
		default:0,
		min: 0
	},
	belongs_to: {
		type:Object
	}


})


module.exports = mongoose.model('Bimester',bimesterSchema);




