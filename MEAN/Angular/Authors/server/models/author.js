const mongoose = require('mongoose');
var authorschema = new mongoose.Schema({
    name: {type: String, required: true}},
    {timestamps: true}
);
mongoose.model('Authors', authorschema);
var Authors = mongoose.model('Authors');