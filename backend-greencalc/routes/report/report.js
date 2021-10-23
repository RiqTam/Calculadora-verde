const router = require('express').Router();
const Bimester = require('../../models/Bimester');
const verify = require('../verifyToken')


router.post('/',verify, async (req,res)=>{
	res.status(400).json({message:"I'm in"})
});



module.exports = router
