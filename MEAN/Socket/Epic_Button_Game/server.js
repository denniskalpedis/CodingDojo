var express = require("express");
var app = express();
// var bodyParser = require('body-parser');
const server = app.listen(8000, function () {});
const io = require('socket.io')(server);
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
var counter = 0;
io.on('connection', function (socket) {
    socket.on('add', function () {
        counter ++;
        io.emit('counted',{number: counter});
    });
    socket.on('reset', function () {
        counter = 0;
        io.emit('counted',{number: counter});
    });
    socket.emit('counted',{number: counter});
});

app.get("/", function (req, response) {
    
    response.render('index');
});
