const express = require('express');
const mongoUtil = require('../mongoUtil');

const router = express.Router();

router.get('/' , (req, res) => { 
    const db = mongoUtil.getDb();
     
    var userCollection = db.collection("User");
    // Here we will find all users
    userCollection.find({}).toArray(function(err, users) {
        // so now, we can return all students to the screen.
        res.status(200).json({'users' : users});
    });
 
});

module.exports = router;