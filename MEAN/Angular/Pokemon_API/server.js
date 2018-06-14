var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
app.use(express.static(path.join(__dirname, './public/dist/public')));
app.set('views', path.join(__dirname, './views'));
app.use(bodyParser.json());

app.listen(8000, function() {
    console.log("listening on port 8000");
});
