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
	console.log(savedBimester)
	if(!savedBimester){
		console.log("Error saving bimester")
		res.status(400).json({message:"Error creating bimester record"});
	}else{
		res.status(200).json(savedBimester);
	}
})
router.post("/bimester",verify, async(req,res)=>{
	console.log(req.body.user_id)
	res.json(req.body.user_id);
})
router.post("/getMyBimester",verify, async(req,res)=>{
	const bim = await Bimester.find({belongs_to : req.body.user_id});
	if(!bim){
		console.log("Bimester not found");
		res.status(400).json({message:"Could not get Bimester from your user"})
	}else{
		res.status(200).json(bim);
	}
})

module.exports = router;