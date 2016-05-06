/// <reference path="./typings/express/express.d.ts" />

var express = require('express'),
    app     = express();
    
    
var PORT = process.env.PORT || 9000;
app.use(express.static(__dirname + ('/public')));

app.get('/',function(req,res){
    res.send('Hello Elibrary');
});

app.listen(PORT,function(req,res){
    console.log("Server is running on port " + PORT);
})