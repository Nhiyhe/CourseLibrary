/// <reference path="../typings/mongoose/mongoose.d.ts" />

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title:String,
    description:String,
    code:String,
    level:String,
    published:{
        type:Date,
        default:Date.now()
    }
    
});


module.exports = mongoose.model('Book', BookSchema);