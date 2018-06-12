var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
mongoose.connect('mongodb://localhost/1955');
var yearschema = new mongoose.Schema({
    name: String},
    {timestamps: true}
);
var Year = mongoose.model('Year', yearschema);
app.get('/', function(request, response){
    Year.find({}, function(err, people){
        if(err){
            response.json({message: "error", error: "DANGER WILL ROBINSON!"});
        } else {
            response.json({message: "GREAT SUCCESS", people: people});
        }
    });
    
});
app.get('/new/:name', function(request, response){
    var newname = new Year();
    newname.name = request.params.name;
    newname.save(function(err){
        if(err) {
            response.json({message: "error", error: "DANGER WILL ROBINSON!"});
        } else {
            response.json({message: "GREAT SUCCESS", added: request.params.name});
        }
    });
});
app.get('/remove/:name/', function(request, response){
    Year.remove({name: request.params.name}, function(err, people){
        if(err) {
            response.json({message: "error", error: "DANGER WILL ROBINSON!"});
        } else {
            response.json({message: "GREAT SUCCESS", removed: request.params.name});
        }
    });
});
app.get('/:name', function(request, response){
    Year.find({name: request.params.name}, function(err, person){
        if(err){
            response.json({message: "error", error: "DANGER WILL ROBINSON!"});
        } else {
            response.json({message: "GREAT SUCCESS", people: person});
        }
    });
});
app.listen(8000, function() {
    console.log("listening on port 8000");
});