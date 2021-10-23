const jwt = require('jsonwebtoken')

function auth (req,res,next){
  const token = req.header('auth-token')
  if(!token) return res.status(401).send('Access Denied')
  try{
    const verified = jwt.verify(token,process.env.TOKEN_SECRET)
    if(verified){
      req.user = verified
		req.body.user_id = verified._id
		next()
    }
  }catch(err){
    res.status(400).send('Invalid token')
  }
}
module.exports = auth
