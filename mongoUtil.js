const MongoClient = require( 'mongodb' ).MongoClient;
//const url = "mongodb://localhost:27017";
const url = process.env.DB_CONNECTION;
var _db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( url,  
      { useNewUrlParser: true, useUnifiedTopology: true}, 
      function( err, client ) {
      _db  = client.db('first');
      return callback( err );
    } );
  },

  getDb: function() {
    return _db;
  }
};


/*
var url = process.env.DB_CONNECTION;

MongoClient.connect(url, 
	{useNewUrlParser: true, useUnifiedTopology: true},
	(err, database) => {
 	assert.equal(null, err);
	const db = database.db('first');
	console.log('db:' + db);

	
});
*/