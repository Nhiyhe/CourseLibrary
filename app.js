/// <reference path="./typings/tsd.d.ts" />

var express = require('express'),
    mongoose = require('mongoose'),   
    bodyParser = require('body-parser'),    
    User     = require('./models/user'),
    toastr      = require('toastr'),
                 
    Comment     = require('./models/comment'),
    passport    = require('passport'),
    MethodOverride = require('method-override'),
    LocalStrategy = require('passport-local'),    
    app     = express(),
    seedController = require('./controllers/seedController'),
    bookController = require('./controllers/bookController'),
    authorController = require('./controllers/authorController'),
    indexController = require('./controllers/indexController');

    
    var db = "mongodb://localhost/course_library";

    mongoose.connect(db,function(req,res){
        console.log("Database online...");
    })
        
    var PORT = process.env.PORT || 9000;
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(express.static(__dirname + ('/public')));
    app.use(express.static(__dirname+('/node_modules/toastr')));
    app.use(express.static(__dirname+('/node_modules')));
    app.use(express.static(__dirname+('/node_modules/bootstrap/dist')));
    app.use(express.static(__dirname+('/node_modules/jquery/dist')));
    
    app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new LocalStrategy(User.authenticate()));

    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
    app.use(MethodOverride('_method'));
    app.set('view engine','ejs');

        
    app.use(function(req,res,next){
     
    res.locals.currentUser = req.user;
    res.locals.toastr = toastr;
    res.locals.moment = require('moment');
    next();
    });

    seedController(app);
    authorController(app);
    bookController(app);
    indexController(app);

    app.listen(PORT,function(req,res){   
        console.log("Server is running on port " + PORT);
    });

