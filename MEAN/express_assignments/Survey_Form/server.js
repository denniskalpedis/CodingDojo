var express = require("express");
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  secret: 'deadpoollovesdeath',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));
app.get("/", function (req, response){
    
    response.render('index');
});
app.post("/submit", function (req, response){
    console.log(req.body);
    req.session.info = req.body;
    response.redirect('/result');
});
app.get("/result", function (req, response){
    response.render('results', {info: req.session.info});
});
app.listen(8000, function() {});