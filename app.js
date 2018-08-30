var express = require('express');
var app =express();
var bodyParser = require('body-parser');
var mongoose=require("mongoose");

//conect to mongoose
mongoose.connect();
var db =mongoose.connection;

app.get('/',function(req,res) {
	res.send("Hello world");
})

app.listen(3000);
console.log("running on port 3000");