const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts')
const bimesterRoute = require('./routes/bimester/bimester')
const reportRoute = require('./routes/report/report')
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

app.use(express.static('public'));

app.use('/api/user',authRoute)
app.use('/api/post',postRoute)
app.use('/api/bimester',bimesterRoute)
app.use('/api/report/',reportRoute)

app.get('/api/',(req,res)=>{
	res.send(200).json({message:'welcome to dinohacks server'})
})

app.listen(8080,()=> console.log('Server up.'))
