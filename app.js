const path=require('path');
const express=require('express');
var bodyParser = require("body-parser");
var app=express();

app.use(express.static('front-end'));

app.use(bodyParser.json());//peticion jason
app.use(bodyParser.urlencoded({extended: true}));


app.post("/", function(req,res){
  console.log("Contrasena: " +req.body.password);
  console.log("Email: " +req.body.email);
  console.log("Recibimos tus datos");
});

app.listen(8080);
