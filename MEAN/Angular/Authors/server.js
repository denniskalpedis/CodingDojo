var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
app.use(express.static(path.join(__dirname, './public/dist/public')));
app.set('views', path.join(__dirname, './views'));
// app.set('view engine', 'ejs');
app.use(bodyParser.json());
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
// app.all("*", (req,res,next) => {
//     res.sendFile(path.resolve("./public/dist/public/index.html"));
// });
app.listen(8000, function() {
    console.log("listening on port 8000");
});