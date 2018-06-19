const mongoose = require('mongoose');

var Tasks = mongoose.model('Tasks');
module.exports = {
    index: function(request, response){
        Tasks.find({}, function(err, tasks){
            if(err){
                response.json({message: "error", error: "DANGER WILL ROBINSON!"});
            } else {
                response.json({message: "GREAT SUCCESS", tasks: tasks});
            }
        });
    },
    tasksPost: function(request, response){
        console.log(request.body);
        var newtask = new Tasks(request.body);
        newtask.save(function(err){
        if(err) {
            console.log(err);
            response.json({message: "error", error: "DANGER WILL ROBINSON!"});
        } else {
            response.json({message: "GREAT SUCCESS", added: request.body.title});
        }
    });
    },
    tasksGet: function(request, response){
        Tasks.findOne({_id: request.params.id}, function(err, tasks){
            if(err){
                response.json({message: "error", error: "DANGER WILL ROBINSON!"});
            } else {
                response.json({message: "GREAT SUCCESS", tasks: tasks});
            }
        });
        
    },
    taskDelete: function(request, response){
        Tasks.remove({_id: request.params.id}, function(err, tasks){
            if(err){
                response.json({message: "error", error: "DANGER WILL ROBINSON!"});
            } else {
                response.json({message: "GREAT SUCCESS", task: "removed id: " + request.params.id});
            }
        });
    },
    taskUpdate: function(request, response){
        Tasks.update({_id: request.params.id}, {$set : request.body}, function(err, tasks){
            if(err){
                response.json({message: "error", error: "DANGER WILL ROBINSON!"});
            } else {
                response.json({message: "GREAT SUCCESS", tasks: tasks});
            }
        });
    }
};