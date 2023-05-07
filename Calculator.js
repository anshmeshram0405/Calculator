//jshint esversion:6
//const { express } = require("console");
const express = require("express");
const bodyParser = require("body-parser");

const app =express();
app.use(bodyParser.urlencoded({extended:true}));

// app.get("/", function(req,res){
//     res.send("Hello, World!");
// });

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res){

    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);

    result=num1+num2;
    res.send("The result of calculation is: "+result);
});
//------------------------------------------------------------
app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req,res){
    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);

    var bmi = weight /(height * height);
    res.send("Your BMI is: "+ bmi +" kg/m²");
});

// app.get("/contact/", function(req,res){
//     res.send("World!");
// });


app.listen(3000,function(){
    console.log("Server is started using port 3000");
});