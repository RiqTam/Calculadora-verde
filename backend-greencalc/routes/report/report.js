const router = require('express').Router();
const Bimester = require('../../models/Bimester');
const User = require('../../models/User')
const verify = require('../verifyToken')


router.post('/getPoints',verify, async (req,res)=>{
	let user = await User.findOne({_id:req.body.user_id})
	if(!user){
		res.status(400).json({message:'User not found'})
	}else{
		res.status(200).json(user.points)
	}
})



module.exports = router
