/// <reference path="../typings/mongoose/mongoose.d.ts" />

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username:String,
    password:String,
    hobby:String
});

module.exports = mongoose.model('User', UserSchema);