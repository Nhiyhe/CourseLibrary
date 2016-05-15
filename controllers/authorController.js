/// <reference path="../typings/tsd.d.ts" />

var bodyParser          = require('body-parser'),
    Author              = require('../models/author'),
    Book              = require('../models/book');
    
    
    
module.exports = function(app){
    
     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({extended:true}));


       app.get('/author/new', isLoggedIn, function(req,res){
            res.render('author/new');
        });
        
        
        app.post('/author/new',function(req,res){
            Author.create(req.body.author, function(err, newAuthor){
                if(err){
                    req.flash('error',err.message);
                }else{
                    req.flash('success','Author successfully created');
                    res.redirect('/authors');
                }
            })
        });

        app.get('/author/:id',function(req,res){
            
        Author.findById(req.params.id).populate("books").exec(function(err, foundAuthor){
            if(err){
                req.flash('error','Author not found');
            }else{
                res.render('author/author',{author:foundAuthor});
            }
        }) 
        });
        
       
        app.get('/authors',function(req,res){
        Author.find({}, function(err,authors){
            if(err){
                req.flash('error',err.message);
            }else{
                    
                res.render('author/index',{authors:authors});
            }
        })
        });

        app.get('/author/:id/book/new', isLoggedIn, function(req,res){
            Author.findById(req.params.id, function(err,author ){
                if(err){
                    req.flash('error',err.message);
                }
                res.render('book/new',{author:author});
            })
            
        });

        app.post('/author/:id/book',isLoggedIn, function(req,res){
        Author.findById(req.params.id, function(err, foundAuthor){
            if(err){
                req.flash('error',err.message)
            }else{
                Book.create(req.body.book, function(err, newBook){
                    if(err){
                        console.log(err);
                    }else{
                        foundAuthor.books.push(newBook);
                        foundAuthor.save();
                        req.flash('success','Book successfully created');
                        res.redirect('/author/' + foundAuthor._id);
                    }
                })
            }
        })
        });

        function isLoggedIn(req,res,next) {
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect('/signin');
        req.flash('error','Login Please..');
        
        };
    
};