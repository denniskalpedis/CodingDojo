const mongoose = require('mongoose');

var Quotes = mongoose.model('Quotes');
module.exports = {
    index: function(request, response){
        response.render('index');
    },
    quotesPost: function(request, response){
        var quoteinstance = new Quotes(request.body);
        quoteinstance.save(function(err){
            if(err){
                conosle.log(err);
            }
            response.redirect('/quotes');
        });
    },
    quotesGet: function(request, response){
        Quotes.find({}, function(err, quotes){
            if(err){
                conosle.log(err);
            }
            response.render('quotes', {quotes: quotes});
        }).sort('-createdAt');
        
    }
};