const router = require('express').Router();
const Bimester = require('../../models/Bimester');
const verify = require('../verifyToken')

function co2(luz, gasolina, gas, agua){
	var co2_emitido = 0;
	co2_emitido += (luz * 247) / 3022;
	co2_emitido += (gasolina * 79) / 763;
	co2_emitido += (gas * 286) / 2545;
	co2_emitido += (agua * 1253) / 50000;
	return co2_emitido;
}

router.post("/newBimester",verify, async(req,res)=>{
	const bim = new Bimester({
		gasto_luz : req.body.gasto_luz,
		gasto_gasolina : req.body.gasto_gasolina,
		gasto_gas : req.body.gasto_gas,
		gasto_agua : req.body.gasto_agua,
		co2_emitido : co2(gasto_luz, gasto_gasolina, gasto_gas, gasto_agua),
		belongs_to : req.body.user_id
	});
	const savedBimester = await bim.save();
	res.send(savedBimester);
})
router.post("/bimester",verify, async(req,res)=>{
	console.log(req.body.user_id)
	res.json(req.body.user_id);
})

module.exports = router;
