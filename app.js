
/* Imports
=============== */

let express = require("express");
let bcrypt = require('bcrypt');
let fs = require('fs');
let body_parser = require('body-parser');
const users_data_filepath = "./json/users.json";

/* Parsers 
=============== */

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
			let password = req.body.password;

			let isUserExisting = JSON.parse(data).find(user=>{
				return user.username == req.body.username;
			})
			if (isUserExisting){res.redirect('/')}
			if(username !=undefined && password != undefined && username != null && password != null){
				const salt = bcrypt.genSaltSync(10);
				const hashed_password = bcrypt.hashSync(password, salt);

				let new_user =
				{
					'username':username,
					'password':hashed_password,
					'data':{'messages':['hey']}
				}

				let db = JSON.parse(data);
				console.log(db);
				db.push(new_user);
				console.log(db);
				db = JSON.stringify(db,null,'\t');

				console.log(db)

				fs.writeFile(users_data_filepath, db ,'utf-8', err=>{
					if(err) throw err;
					res.redirect("/");	
				});		
			}	
		}
	});
});

app.listen(3000);