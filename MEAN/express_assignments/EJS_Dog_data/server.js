var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.get("/dogs", function (request, response){
    response.render('dogs');
});
app.get("/dog/1", function (request, response){
    var info = {name: "Rocky", food: "Steak", age: "5", toys: ["bone", "shoe", "Dennis"], image: "boxer.jpg"};
    response.render('details', {dog : info});
});
app.get("/dog/2", function (request, response){
    var info = {name: "Lady", food: "ANYTHING", age: "10", toys: ["keys", "Dennis"], image: "Cavalier.jpg"};
    response.render('details', {dog : info});
});
app.get("/dog/3", function (request, response){
    var info = {name: "Ein", food: "Liver", age: "7", toys: ["bone", "giraffe", "Dennis"], image: "pembroke_welsh_corgi.jpg"};
    response.render('details', {dog : info});
});
app.get("/dog/4", function (request, response){
    var info = {name: "Spot", food: "Chicken", age: "1", toys: ["rubber chicen", "shoe", "Dennis"], image: "pit-bull.jpg"};
    response.render('details', {dog : info});
});
app.get("/cars/new", function (request, response){
    response.render('form');
});
app.listen(8000, function() {});