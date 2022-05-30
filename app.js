let fs = require('fs');
let express = require("express");

const app = express();
app.set('view engine', 'ejs'); 

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

app.listen(3000);