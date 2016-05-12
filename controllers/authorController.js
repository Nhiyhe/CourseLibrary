var bodyParser          = require('body-parser'),
    Author              = require('../models/author');
    
    
    
module.exports = function(app){
    
     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({extended:true}));

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

        app.get('/author/:id/book/new', isLoggedIn, function(req,res){
            Author.findById(req.params.id, function(err,author ){
                if(err){
                    console.log(err);
                }
                res.render('book/new',{author:author});
            })
            
        });

        app.post('/author/:id/book',isLoggedIn, function(req,res){
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

        function isLoggedIn(req,res,next) {
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect('/signin');
        };
    
};