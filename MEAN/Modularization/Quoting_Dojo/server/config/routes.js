// var mongoose = require('mongoose');
// var Quotes = mongoose.model('Quotes');
var quotes = require('../controllers/quotes.js');
module.exports = function(app){
    app.get('/', function(request, response){
        // response.render('index');
        quotes.index(request, response);
    });
    app.post('/quotes', function(request, response){
        // console.log(request.body);
        // var quoteinstance = new Quotes();
        // quoteinstance.name = request.body.name;
        // quoteinstance.quote = request.body.quote;
        // quoteinstance.save(function(err){
        //     if(err){
        //         conosle.log(err);
        //     }
        //     response.redirect('/quotes');
        // });
        quotes.quotesPost(request, response);
    });
    app.get('/quotes', function(request, response){
        // Quotes.find({}, function(err, quotes){
        //     if(err){
        //         conosle.log(err);
        //     }
        //     response.render('quotes', {quotes: quotes});
        // }).sort('-createdAt');
        quotes.quotesGet(request, response);
    });
};