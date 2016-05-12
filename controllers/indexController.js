 var passport    = require('passport'),
     User        = require('../models/user'),
    
     toastr      = require('toastr'),
 LocalStrategy = require('passport-local');
 
  
    
module.exports = function(app){
    
        app.get('/',function(req,res){
            console.log(req.user);
            res.render('index');
            
        });

        app.get('/index',function(req,res){
            res.render('index');
        });

        app.get('/register',function(req,res){
        res.render('user/register'); 
        });

        app.post('/register', function(req,res){
            User.register(new User({username:req.body.username, hobby:req.body.hobby}), req.body.password,function(err,user){
                if(err){
                    console.log(err);
                    return res.redirect('/login');
                }
                passport.authenticate('local')(req,res, function(){
                    
                    
                    
                    res.render('user/secret');
                })
            })
        });

        app.get('/signin', function(req,res){
        res.render('user/signin'); 
        });

        app.get('/user/secret', isLoggedIn, function(req,res){
              res.render('user/secret');    
        });

        app.post('/signin', passport.authenticate("local",{
            failureRedirect:'/',
            successRedirect:'/user/secret'
            
        }),function(req,res){
            console.log(req.url);
            console.log(req.originalUrl);
        });


        app.get('/logout', function(req,res){
            req.logout();
            res.redirect('/');
        });
        
      
        
        function isLoggedIn(req,res,next) {
             console.log(req.url);
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect('/');
        };

        
};