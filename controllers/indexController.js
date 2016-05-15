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


        app.post('/register', function(req,res){
            User.register(new User({username:req.body.username, hobby:req.body.hobby}), req.body.password,function(err,user){
                if(err){
                    req.flash('error',err.message);
                    return res.redirect('back');
                }
                passport.authenticate('local')(req,res, function(){
                    req.flash('success','You are successfully register ' + user.username);
                    res.render('user/secret');
                })
            })
        });
        
        
        app.get('/register',function(req,res){
        res.render('user/register'); 
        });

        app.get('/signin', function(req,res){
        res.render('user/signin'); 
        });

        app.get('/user/secret', isLoggedIn, function(req,res){
              res.render('user/secret');    
        });

        app.post('/signin', passport.authenticate("local",{
            failureRedirect:'/signin',
            successRedirect:'/user/secret',
            failureFlash:'Invalid Username or Password',
            successFlash:'Welcome to my Application.'
            
        }),function(req,res){
            
        });


        app.get('/logout', function(req,res){
            req.logout();
            req.flash('success','You are successfully logout');
            res.redirect('/');
        });
        
      
        
        function isLoggedIn(req,res,next) {           
        if(req.isAuthenticated()){
            return next();
        }
        req.flash('error','You need to login to do this');
        res.redirect('back');
        };

        
};