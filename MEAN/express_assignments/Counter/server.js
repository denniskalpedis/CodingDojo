var express = require("express");
var app = express();
var session = require('express-session');
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.use(session({
  secret: 'deadpoollovesdeath',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));
app.get("/", function (req, response){
    if (req.session.counter){
        req.session.counter += 1;
    } else {
        req.session.counter = 1;
    }
    response.render('index', {counter: req.session.counter});
});
app.get("/2", function (req, response){
    if (req.session.counter){
        req.session.counter += 1;
    } else {
        req.session.counter = 1;
    }
    response.redirect('/');
});
app.get("/reset", function (req, response){
    req.session.counter = 0;
    response.redirect('/');
});
app.listen(8000, function() {});