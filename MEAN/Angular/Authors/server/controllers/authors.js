const mongoose = require('mongoose');

var Authors = mongoose.model('Authors');
module.exports = {
    // index: function(request, response){
    //     Tasks.find({}, function(err, tasks){
    //         if(err){
    //             response.json({message: "error", error: "DANGER WILL ROBINSON!"});
    //         } else {
    //             response.json({message: "GREAT SUCCESS", tasks: tasks});
    //         }
    //     });
    // },
    authorsPost: function(request, response){
        console.log(request.body);
        var newAuthor = new Authors(request.body);
        newAuthor.save(function(err){
        if(err) {
            console.log(err);
            response.json({message: "error", error: "DANGER WILL ROBINSON!"});
        } else {
            response.json({message: "GREAT SUCCESS", added: request.body.title});
        }
    });
    },
    // tasksGet: function(request, response){
    //     Tasks.findOne({_id: request.params.id}, function(err, tasks){
    //         if(err){
    //             response.json({message: "error", error: "DANGER WILL ROBINSON!"});
    //         } else {
    //             response.json({message: "GREAT SUCCESS", tasks: tasks});
    //         }
    //     });
        
    // },
    // taskDelete: function(request, response){
    //     Tasks.remove({_id: request.params.id}, function(err, tasks){
    //         if(err){
    //             response.json({message: "error", error: "DANGER WILL ROBINSON!"});
    //         } else {
    //             response.json({message: "GREAT SUCCESS", task: "removed id: " + request.params.id});
    //         }
    //     });
    // },
    // taskUpdate: function(request, response){
    //     Tasks.findOne({_id: request.params.id}, function(err, tasks){
    //         tasks = Tasks(request.body);
    //         tasks.save(function(err){
    //         if(err){
    //             response.json({message: "error", error: "DANGER WILL ROBINSON!"});
    //         } else {
    //             response.json({message: "GREAT SUCCESS", updated: request.params.id});
    //         }
    //         });
            
    //     });
    // }
};