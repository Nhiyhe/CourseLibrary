/// <reference path="../typings/mongoose/mongoose.d.ts" />

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
    name:String,
    lastname:String,
    biography:String,
    books:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Book'
        }
    ]
    
});

module.exports = mongoose.model('Author', AuthorSchema);

