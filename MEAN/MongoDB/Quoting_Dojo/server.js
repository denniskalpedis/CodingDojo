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
// Quotes.remove({}, function(err){
//     console.log(err);
// });
app.get('/', function(request, response){
    response.render('index');
});
app.post('/quotes', function(request, response){
    console.log(request.body);
    var quoteinstance = new Quotes();
    quoteinstance.name = request.body.name;
    quoteinstance.quote = request.body.quote;
    quoteinstance.save(function(err){
        if(err){
            conosle.log(err);
        }
        response.redirect('/quotes');
    });
});
app.get('/quotes', function(request, response){
    Quotes.find({}, function(err, quotes){
        if(err){
            conosle.log(err);
        }
        response.render('quotes', {quotes: quotes});
    }).sort('-createdAt');
    
});
app.listen(8000, function() {
    console.log("listening on port 8000");
});