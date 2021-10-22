const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts')



dotenv.config()

mongoose.connect(process.env.DB_CONNECT,()=>{ console.log("Connected to db") })


app.use(express.json())
app.use('/api/user',authRoute)
app.use('/api/posts',postRoute)

app.get('/',(req,res)=>{
	res.send(JSON.parse("{message:'Hi from Dinohack team! '}"))
})


app.listen(8080,()=> console.log('Server up.'))
