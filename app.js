
/* Imports
=============== */

let express = require("express");
let fs = require('fs');
let body_parser = require('body-parser');
let database = require('./js/database');
let login_system = require("./js/loginSystem");
const users_data_filepath = "./json/users.json";

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
	res.render("landing.ejs");
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

app.post("/signup", (req, res)=>{
	console.log('here');
	fs.readFile(users_data_filepath, async(err, data)=>{
		if(err){
			throw err;
		} else {
			let username = req.body.username;
			let userpassword = req.body.userpassword;
			fs.writeFile(users_data_filepath, login_system.addUserToDatabase(data, username, userpassword), err=>{
				if(err) throw err;
			});
		}
		res.redirect("/");
	});
});

app.listen(3000);