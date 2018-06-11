var express = require("express");
var app = express();
var bodyParser = require('body-parser');
const server = app.listen(8000, function () {});
const io = require('socket.io')(server);
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

io.on('connection', function (socket) {
    socket.on('posting_form', function (data) {
        socket.emit('updated_message', {msg: 
            "You emitted the following information to the server:{name: '"
            +data.name+"', location: '"+data.location+
            "', language: '"+ data.language + "', comment: '"
            + data.comment + "'}"});
        socket.emit('random_number', random_number());
    });

});
function random_number(){
    return "Your lucky number emitted by the server is " + (Math.floor(Math.random() * (1000)) + 1);
}

app.get("/", function (req, response) {

    response.render('index');
});
