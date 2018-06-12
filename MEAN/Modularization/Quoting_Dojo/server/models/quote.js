const mongoose = require('mongoose');
var quoteschema = new mongoose.Schema({
    name: String,
    quote: String},
    {timestamps: true}
);
mongoose.model('Quotes', quoteschema);