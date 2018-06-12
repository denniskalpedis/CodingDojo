var mongoose = require('mongoose');
var Quotes = mongoose.model('Quotes');
module.export = {
    index: function(request, response){
        response.render('index');
    },
    quotesPost: function(request, response){
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