const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts')
const bimesterRoute = require('./routes/bimester/bimester')
const cors = require('cors')



dotenv.config()

mongoose.connect(process.env.DB_CONNECT,(err)=>{ 
	if(err){
		console.log(err);
	}else{
		console.log('Connected to database!');
	}
})

app.use(express.json())
app.use(cors());

app.use('/api/user',authRoute)
app.use('/api/post',postRoute)
app.use('/api/bimester',bimesterRoute)

app.get('/',(req,res)=>{
	res.json({ message: "Server on" })
});

app.listen(8080,()=> console.log('Server up.'))
