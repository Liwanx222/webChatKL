let fs = require('fs');
let express = require("express");
let path = require('path');
let body_parser = require('body-parser');
let db = require('./js/database');
let db_json = './json/database.json';

const app = express();
app.set('view engine', 'ejs'); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));
app.use(body_parser.urlencoded({extended:false}));

app.get("/", (req, res)=> {
	res.render("index.ejs");
});

app.get("/hello/:name", function (req, res) {
	res.writeHead(200, {"Content-Type": "application/json"});
	res.end(JSON.stringify({message: "Hello" + req.params.name + "!"}));
});

app.get("/express01", (req, res) => {
	res.render("pages/express01")
});

app.get("/send",(req,res)=>{
	res.render('index.ejs');
	fs.readFile(db_json,'utf-8',async(err,data)=>{
		let object_db = JSON.parse(data);
		let item = sessionStorage.getItem('messages');
		console.log(item);
		let session_db = JSON.parse(item);
		db.fillDB(session_db['messages'],object_db);
		console.log(object_db);
	});
})

app.listen(3000);