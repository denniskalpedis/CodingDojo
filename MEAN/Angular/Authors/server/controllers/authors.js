const mongoose = require('mongoose');

var Authors = mongoose.model('Authors');
module.exports = {
    getAuthors: function(request, response){
        Authors.find({}, function(err, authors){
            if(err){
                response.json({message: "error", error: "DANGER WILL ROBINSON!"});
            } else {
                response.json({message: "GREAT SUCCESS", authors: authors});
            }
        }).sort('name');
    },
    authorsPost: function(request, response){
        var newAuthor = new Authors(request.body);
        newAuthor.save(function(err){
        if(err) {
            response.json({message: "error", error: "DANGER WILL ROBINSON!"});
        } else {
            response.json({message: "GREAT SUCCESS", added: request.body.title});
        }
    });
    },
    getAuthor: function(request, response){
        Authors.findOne({_id: request.params.id}, function(err, author){
            if(err){
                response.json({message: "error", error: "DANGER WILL ROBINSON!"});
            } else {
                response.json({message: "GREAT SUCCESS", author: author});
            }
        });
        
    },
    deleteAuthor: function(request, response){
        Authors.remove({_id: request.params.id}, function(err, author){
            if(err){
                response.json({message: "error", error: "DANGER WILL ROBINSON!"});
            } else {
                response.json({message: "GREAT SUCCESS", task: "removed id: " + request.params.id});
            }
        });
    },
    editAuthor: function(request, response){
        request.body.updatedAt = new Date();
        Authors.updateOne({_id: request.params.id},Authors(request.body), function(err, author){
            if(err){
                response.json({message: "error", error: "DANGER WILL ROBINSON!"});
            } else {
                response.json({message: "GREAT SUCCESS", updated: request.params.id});
            }
        });
    }
};