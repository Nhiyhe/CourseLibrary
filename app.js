/// <reference path="./typings/tsd.d.ts" />

var express = require('express'),
    mongoose = require('mongoose'),
    Book     = require('./models/book'),
    bodyParser = require('body-parser'),
    Author     = require('./models/author'),
    app     = express(),
    seedController = require('./controllers/seedController')(app);
    
    
var db = "mongodb://localhost/course_library";

mongoose.connect(db,function(req,res){
    console.log("Database online...");
})
    
var PORT = process.env.PORT || 9000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + ('/public')));
app.use(express.static(__dirname+('/node_modules/bootstrap/dist')));
app.use(express.static(__dirname+('/node_modules/jquery/dist')));

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('index');
    
});

app.get('/index',function(req,res){
    res.render('index');
});

app.get('/books',function(req,res){
   Book.find({},function(err,books){
       if(err){
           console.log(err);
       }else{
           
           res.render('book/index',{books:books});
       }
   })
});

app.get('/author/:id',function(req,res){
   Author.findById(req.params.id).populate("books").exec(function(err, foundAuthor){
       if(err){
           console.log(err);
       }else{
           res.render('author/author',{author:foundAuthor});
       }
   }) 
});

app.get('/authors',function(req,res){
   Author.find({}, function(err,authors){
       if(err){
           console.log(err);
       }else{
            
           res.render('author/index',{authors:authors});
       }
   })
});

app.get('/author/:id/book/new', function(req,res){
    Author.findById(req.params.id, function(err,author ){
        if(err){
            console.log(err);
        }
        res.render('book/new',{author:author});
    })
    
});

app.post('/author/:id/book',function(req,res){
   Author.findById(req.params.id, function(err, foundAuthor){
       if(err){
           console.log(err);
       }else{
           Book.create(req.body.book, function(err, newBook){
               if(err){
                   console.log(err);
               }else{
                   foundAuthor.books.push(newBook);
                   foundAuthor.save();
                   res.redirect('/author/' + foundAuthor._id);
               }
           })
       }
   })
});



app.listen(PORT,function(req,res){
   
    console.log("Server is running on port " + PORT);
})

