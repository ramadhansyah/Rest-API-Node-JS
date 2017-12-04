var express 	= require('express');
var bodyParse 	= require('body-parser');
var app 		= express();
app.use(bodyParse.urlencoded({ extended: true }))
app.use(bodyParse.json())
var db 			= require('./db').db;



var userRouter = require('./userRouter');
var mahasiswaRouter = require('./mahasiswaRouter');
app.use('/data',userRouter);
app.use('/mahasiswa',mahasiswaRouter);
app.use('*',(req,res)=>{
	res.send('maaf anda tdk punya akses kemari');
});

var server = app.listen(3101,()=>{
	db.sync({force:false})
	  .then(massage=>{
	  	console.log('connection');
	  });
});
