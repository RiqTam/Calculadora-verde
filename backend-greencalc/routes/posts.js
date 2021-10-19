const router = require("express").Router();
const verify = require('./verifyToken')
router.get('/',verify,(req,res)=>{
  res.json({
    posts:{
      title:"TITLE",
      data: "you dont see this"
    }
  })
})

module.exports = router
