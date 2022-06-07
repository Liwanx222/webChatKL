
/* Imports
=============== */

let fs = require('fs');
let express = require("express");
let path = require('path');
let body_parser = require('body-parser');
const req = require('express/lib/request');
let input_handling = require('.js/')
let db_json = './json/database.json';

/* App Parsers 
=============== */

const app = express();
app.set('view engine', 'ejs'); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));
app.use(body_parser.urlencoded({extended:false}));

/* Main
=============== */

app.get("/", (req, res)=> {
	res.render("index.ejs");
});

app.get("/hello/:name", function (req, res) {
	res.writeHead(200, {"Content-Type": "application/json"});
	res.end(JSON.stringify({message: "Hello" + req.params.name + "!"}));
});

app.get('/send',(req,res)=>{
	console.log('hello');
	res.redirect('/');
	fs.readFile('./json/database.json','utf-8',async(err,data)=>{
		let db = JSON.parse(data)['messages'];
		addMessage
	})
});

app.listen(3000);