var router = require('express').Router();
var data   = require('./data');
var Mahasiswa= require('./db').Mahasiswa;
module.exports = router;

router.get('/',(req,res,next)=>{
	Mahasiswa.findAll()
		.then(res.send.bind(res))
		.catch(next);
});

router.put('/:id',(req,res,next)=>{
	Mahasiswa.update(
		{
			title : req.body.title,
			body  : req.body.body
		},{
			where : {
				id : req.params.id
			}
		}
		
	)
	.then((mahasiswa)=>{
		res.send(mahasiswa);
	})
	.catch(next);
});
router.delete('/:id',(req,res,next)=>{
	Mahasiswa.destroy({
		where :{
			id : req.params.id
		}
	})
	.then((data)=>{
		if(data === 1){
			res.send({
				success: true,
			});
		}
		
	})
	.catch(next);
});
router.get('/:id',(req,res,next)=>{
	var id = req.params.id;
	console.log(req.body);
	res.send(data[id]);
	Mahasiswa.findOne({
		where :{
			id : req.params.id
		}
	})
	.then((mahasiswa)=>{
		if(!mahasiswa){
			res.send('Data Tidak Ada');
		}else{
			res.send(mahasiswa);
		}
	})
	.catch(next);
});

router.post('/',(req,res,next)=>{
	Mahasiswa.create(req.body)
	   .then((mahasiswa)=>{
	   		res.send(mahasiswa);
	   })
	   .catch((error)=>{
	   	/*var getError = {
	   		error.path : error.message
	   	};*/
	   	res.send(error.errors[0]);
	   })
	   .catch(next);
});