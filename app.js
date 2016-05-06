/// <reference path="./typings/tsd.d.ts" />

var express = require('express'),
    mongoose = require('mongoose'),
    app     = express();
    
    
    
var db = "mongodb://localhost/course_library";

mongoose.connect(db,function(req,res){
    console.log("Database online...");
})
    
var PORT = process.env.PORT || 9000;
app.use(express.static(__dirname + ('/public')));
app.use(express.static(__dirname+('/node_modules/bootstrap/dist')));

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.send('Hello Elibrary');
});

app.get('/index',function(req,res){
    res.render('index');
});

app.listen(PORT,function(req,res){
    console.log("Server is running on port " + PORT);
})

