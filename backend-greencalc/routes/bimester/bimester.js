const router = require('express').Router();
const Bimester = require('../../models/Bimester');
const verify = require('../verifyToken')

router.post("/newBimester",verify, async(req,res)=>{
	const bim = new Bimester({
		gasto_luz : req.body.gasto_luz,
		gasto_gasolina : req.body.gasto_gasolina,
		gasto_gas : req.body.gasto_gas,
		gasto_agua : req.body.gasto_agua,
		co2_emitido : req.body.co2_emitido,
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
