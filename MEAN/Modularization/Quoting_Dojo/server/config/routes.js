// var mongoose = require('mongoose');
// var Quotes = mongoose.model('Quotes');
var quotes = require('../controllers/quotes.js');
module.exports = function(app){
    app.get('/', function(request, response){
        // response.render('index');
        quotes.index(request, response);
    });
    app.post('/quotes', function(request, response){
        quotes.quotesPost(request, response);
    });
    app.get('/quotes', function(request, response){
        quotes.quotesGet(request, response);
    });
};