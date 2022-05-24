let fs = require('fs');
let express = require("express");

const app = express();

app.get("/", function (req, res) {
	res.writeHead(200, {"Content-Type": "text/html"});
	fs.readFile("../index.html", (err, data)=>{
		res.end(data);
	});
});

app.get("/hello/:name", function (req, res) {
	res.writeHead(200, {"Content-Type": "application/json"});
	res.end(JSON.stringify({message: "Hello" + req.params.name + "!"}));
});

app.listen(8080);