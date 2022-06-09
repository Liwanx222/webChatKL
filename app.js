
/* Imports
=============== */

let fs = require('fs');
let express = require("express");
let path = require('path');
let body_parser = require('body-parser');
let req = require('express/lib/request');

/* App Parsers 
=============== */

const app = express();
app.set('view engine', 'ejs'); 
app.use(express.static(__dirname));
app.use(express.json());
app.use(body_parser.urlencoded({extended:false}));

/* Main
=============== */

app.get("/", (req, res)=> {
	res.render("index.ejs");
});

app.post('/send',(req,res)=>{
	let post = req.body.text;
	fs.readFile('./json/database.json',async(err,data)=>{
		if(err) throw err;
		let db = JSON.parse(data);
		db['messages'].push(post);
		db = JSON.stringify(db);
		fs.writeFile('./json/database.json',db,err=>{
			if (err) throw err;
			console.log('file written');
		})

		res.redirect('/');
	})
});

app.listen(3000);