var router = require('express').Router();
var data   = require('./data');
var Article= require('./db').Article;
module.exports = router;

router.get('/',(req,res,next)=>{
	Article.findAll()
		.then(res.send.bind(res))
		.catch(next);
});

router.put('/:id',(req,res,next)=>{
	Article.update(
		{
			title : req.body.title,
			body  : req.body.body
		},{
			where : {
				id : req.params.id
			}
		}
		
	)
	.then((articel)=>{
		res.send(articel);
	})
	.catch(next);
});
router.delete('/:id',(req,res,next)=>{
	Article.destroy({
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
	/*var id = req.params.id;
	console.log(req.body);
	res.send(data[id]);*/
	Article.findOne({
		where :{
			id : req.params.id
		}
	})
	.then((articel)=>{
		if(!articel){
			res.send('Data Tidak Ada');
		}else{
			res.send(articel);
		}
	})
	.catch(next);
});

router.post('/',(req,res,next)=>{
	Article.create(req.body)
	   .then((articel)=>{
	   		res.send(articel);
	   })
	   .catch(next);
});