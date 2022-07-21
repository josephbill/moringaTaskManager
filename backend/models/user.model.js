//require mongoose first
const mongoose = require('mongoose');
//initialize the schema (rules)
const Schema = mongoose.Schema
//declare the data fields
const userSchema = new Schema({
    //user object
    username:{
        //validation for the entries
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 3
    },
}, {
    timestamps: true
    });

//store the upload
const User = mongoose.model('Users',userSchema)

//export
module.exports = User
