var tasks = require('../controllers/tasks.js');
module.exports = function(app){
    app.get('/tasks', function(request, response){
        tasks.index(request, response);
    });
    app.post('/tasks', function(request, response){
        tasks.tasksPost(request, response);
    });
    app.get('/tasks/:id', function(request, response){
        tasks.tasksGet(request, response);
    });
    app.put('/tasks/update/:id', function(request, response){
        tasks.taskUpdate(request, response);
    });
    app.delete('/tasks/delete/:id', function(request, response){
        tasks.taskDelete(request, response);
    });
};