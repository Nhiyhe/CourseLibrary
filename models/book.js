/// <reference path="../typings/mongoose/mongoose.d.ts" />

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title:String,
    image:String,
    description:String,
    code:String,
    level:String,
    author:{
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Author'
        },
        name:String
    },
    published:{
        type:Date,
        default:Date.now()
    }
    
});


module.exports = mongoose.model('Book', BookSchema);