//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//extended = true allow us to post nested object
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  //__dirname currentfile Path
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  var result = num1 + num2;
  res.send("The result of the two number is " + result);
});

app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){
  console.log(req.body);
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (height * height);
  res.send("Your BMI is " + bmi);
});

app.listen(3000, function(){
  console.log("Server started listen on port 3000");
});
