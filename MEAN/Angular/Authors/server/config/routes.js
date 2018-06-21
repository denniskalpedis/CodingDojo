var authors = require('../controllers/authors.js');
var path = require('path');
module.exports = function(app){
    app.post('/api/author', function(request, response){
        authors.authorsPost(request, response);
    });
    app.all("*", (request,response,next) => {
        response.sendFile(path.resolve("./public/dist/public/index.html"));
    });
};