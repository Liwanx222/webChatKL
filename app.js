
/* Imports
=============== */

let express = require("express");
let fs = require('fs');
let body_parser = require('body-parser');
let database = require('./js/database');

/* Parsers 
=============== */
let mess_handler = require('./js/messagesHandler');

const app = express();
app.set('view engine', 'ejs'); 
app.use(express.static(__dirname));
app.use(express.json());
app.use(body_parser.urlencoded({extended:false}));

/* Main
=============== */

app.get("/", (req, res)=> {
	res.render("index.ejs");
	fs.readFile(db, 'utf-8', async(err, data) => {
		let object_db = JSON.parse(data);
	})
	// FUCK.
	mess_handler.displayMessages(object_db);
});

app.post('/send',(req,res)=>{
	fs.readFile('./json/database.json',async(err,data)=>{
		if (err){
			throw err;
		}
		fs.writeFile('./json/database.json',database.updateDatabase(data,req.body.text),err=>{
			if (err) throw err;
		})
		res.redirect('/');
	})
});

app.listen(3000);