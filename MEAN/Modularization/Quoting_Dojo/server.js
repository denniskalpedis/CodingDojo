var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
mongoose.connect('mongodb://localhost/quotingDojo');
var quoteschema = new mongoose.Schema({
    name: String,
    quote: String},
    {timestamps: true}
);
var Quotes = mongoose.model('Quotes', quoteschema);
require('./server/config/routes.js')(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
});
