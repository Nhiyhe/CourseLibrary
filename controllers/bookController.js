/// <reference path="../typings/tsd.d.ts" />

var     bodyParser  = require('body-parser'),
        Comment        = require('../models/comment'),
        Book        = require('../models/book');
        
        
module.exports = function(app){
    
 app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

       app.get('/books',function(req,res){
        Book.find({},function(err,books){
        if(err){
            req.flash('error',err.message);
        }else{
            
            res.render('book/index',{books:books});
        }
    })
    });


        app.get('/book/:id',function(req,res){
        Book.findById(req.params.id).populate('comments').exec(function(err, foundBook){
            if(err){
                req.flash('error',err.message);
            }else{
                res.render('book/show',{book:foundBook});
            }
            
        }) 
        });

        app.get('/book/:id/comment/new', isLoggedIn, function(req,res){
            console.log(req.url);
            Book.findById(req.params.id, function(err, foundBook){
                if(err){
                    req.flash('error',err.message);
                }else{
                    res.render('comment/new', {book:foundBook});
                }
            })
        });

        app.post('/book/:id/comment',function(req,res){
        Book.findById(req.params.id, function(err, foundBook){
            if(err){
               req.flash('error',err.message);
            }else{
                
                var author = {
                    id:req.user._id,
                    username:req.user.username
                };
                
                Comment.create({content:req.body.content,author:author}, function(err, newComment){
                    if(err){
                        req.flash('error',err.message);
                    }else{
                            foundBook.comments.push(newComment);
                            foundBook.save();
                            req.flash('success','Comment successfully saved');
                            res.redirect('/book/' + req.params.id);
                    }
                    
                })
            }
        })
        });
        
         app.put('/book/:id/comment/:comment_id', commentOwnership, function(req,res){
            Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
                if(err){
                    req.flash('error',err.message);
                }else{
                    req.flash('success','Comment was successfully updated!');
                    res.redirect('/book/' + req.params.id);
                }
            })
        });
        
        app.get('/book/:id/comment/:comment_id/edit', commentOwnership, function(req,res){
            Comment.findById(req.params.comment_id, function(err, foundComment){
                if(err){
                    req.flash('error',err.message);
                }else{
                    res.render('comment/edit',{comment:foundComment, book_id:req.params.id});
                }
            })
        });
      
      app.delete('/book/:id/comment/:comment_id',function(req,res){
          Comment.findByIdAndRemove(req.params.comment_id, function(err){
              if(err){
                  req.flash('error',err.message);
              }else{
                  req.flash('success','Comment successfully deleted');
                  res.redirect('/book/' + req.params.id);
              }
          })
      });
      
      function commentOwnership(req,res,next) {
          if(req.isAuthenticated()){              
              Comment.findById(req.params.comment_id, function(err, foundComment){
                     if(foundComment.author.id.equals(req.user._id)){
                      next();
                  }else{
                      req.flash('error','Sorry you do not have permission');
                  }
              })
              
          }else{
              req.flash('error','Sorry you need to login.');
          }
      }  
   
        
       function isLoggedIn(req,res,next) {
            console.log(req.url);
        if(req.isAuthenticated()){
            return next();
        }
        req.flash('error','You need to login to do this');
        res.redirect('/signin');
        };
};