const mongoose = require('mongoose');
var taskschema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, default: "" },
    completed: {type: Boolean, default: false}},
    {timestamps: true}
);
mongoose.model('Tasks', taskschema);
var Tasks = mongoose.model('Tasks');