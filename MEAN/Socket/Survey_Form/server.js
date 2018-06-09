var express = require("express");
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
const io = require('socket.io')(server);
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

io.on('connection', function (socket) {

    socket.emit('greeting', {
        msg: 'Greetings, from server Node, brought to you by Sockets! -Server'
    });
    socket.on('thankyou', function (data) {
        console.log(data.msg);
    });

});

app.use(session({
    secret: 'deadpoollovesdeath',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}));
app.get("/", function (req, response) {

    response.render('index');
});
app.post("/submit", function (req, response) {
    console.log(req.body);
    req.session.info = req.body;
    response.redirect('/result');
});
app.get("/result", function (req, response) {
    response.render('results', {
        info: req.session.info
    });
});
app.listen(8000, function () {});