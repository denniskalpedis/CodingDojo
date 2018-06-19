var tasks = require('../controllers/tasks.js');
module.exports = function(app){
    app.get('/api/tasks', function(request, response){
        tasks.index(request, response);
    });
    app.post('/api/tasks', function(request, response){
        tasks.tasksPost(request, response);
    });
    app.get('/api/tasks/:id', function(request, response){
        tasks.tasksGet(request, response);
    });
    app.put('/api/tasks/update/:id', function(request, response){
        tasks.taskUpdate(request, response);
    });
    app.delete('/api/tasks/delete/:id', function(request, response){
        tasks.taskDelete(request, response);
    });
};