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
var color = "white";
io.on('connection', function (socket) {
    socket.on('green', function () {
        color = "green";
        io.emit('color',{color: color});
    });
    socket.on('blue', function () {
        color = "blue";
        io.emit('color',{color: color});
    });
    socket.on('pink', function () {
        color = "pink";
        io.emit('color',{color: color});
    });
    socket.emit('color',{color: color});
});

app.get("/", function (req, response) {
    
    response.render('index');
});
