const express = require('express');
const mongoUtil = require('../mongoUtil');

const router = express.Router();

router.post('/' , (req, res) =>  {

	const db = mongoUtil.getDb();

	console.log('req is %j', req.body); 

	// db.collection('User').insertOne(req.body, (err, dbres) => {
	// 	if (err) throw err;
	// 	console.log('1 user inserted %j', req.body); 
	// }) 

	db.collection('User').insertOne(req.body)
	.then( item => {
		console.log('item ===========' + item);
		res.status(201).json(item)
	});
		// 	if (err) throw err;
		// 	console.log('1 user inserted %j', req.body); 
		// }) 
		
	 
	
});


module.exports = router;