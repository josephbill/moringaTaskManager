//require mongoose first
const mongoose = require('mongoose');
//initialize the schema (rules)
const Schema = mongoose.Schema

//schema  format
const taskSchema = new Schema({
    //data validation
    username: {type: String, required: true},
    description: {type: String, required: true},
    duration: {type: Number, required: true},
    date: {type: Date, required: true},

},
    {
        timestamps: true
    }
    );

//store the upload
const Tasks = mongoose.model('Tasks',taskSchema)

//export
module.exports = Tasks
