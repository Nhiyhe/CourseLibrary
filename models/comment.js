/// <reference path="../typings/mongoose/mongoose.d.ts" />

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    name:String,
    author:{
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        username:String
        
    }
});

module.exports = mongoose.model('Comment',CommentSchema);