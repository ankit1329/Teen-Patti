var config = require('./../config');
var databaseUrl;
// var config = JSON.parse(process.env.APP_CONFIG);
if (config.database.mode==='local'){
	databaseUrl ="local"; 
} else {
	databaseUrl = `mongodb://ankit:ankit1329@ds141720.mlab.com:41720/test0`;
	/*"mongodb://" + config.mongo.user + ":nopassword@" + config.mongo.host + ":" + config.mongo.port + "/" + config.mongo.db;*/ // "username:password@example.com/mydb"
}
var collections = ["users", "tables","sessions"];
var db = require("mongojs")(databaseUrl, collections);



var DAL={db:db};


module.exports = DAL;