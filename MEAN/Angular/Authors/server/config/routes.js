var authors = require('../controllers/authors.js');
var path = require('path');
module.exports = function(app){
    app.post('/api/author', function(request, response){
        authors.authorsPost(request, response);
    });
    app.get('/api/authors', function(request, response){
        authors.getAuthors(request, response);
    });
    app.get('/api/author/:id', function(request, response){
        authors.getAuthor(request, response);
    });
    app.put('/api/edit/author/:id', function(request, response){
        authors.editAuthor(request, response);
    });
    app.delete('/api/delete/:id', function(request, response){
        authors.deleteAuthor(request, response);
    });
    app.all("*", (request,response,next) => {
        response.sendFile(path.resolve("./public/dist/public/index.html"));
    });

};