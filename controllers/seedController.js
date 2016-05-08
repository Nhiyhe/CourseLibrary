var Author = require('../models/author');
var Book = require('../models/book');
var authors = [
        {
            name:'James',
            lastname:"Burley",
            image:"http://photos2.meetupstatic.com/photos/event/1/7/d/6/event_246186102.jpeg",
            biography:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra porta sapien vitae mattis. Quisque egestas dictum urna, eu sodales tortor luctus eget. Morbi vitae facilisis est. Curabitur dictum magna eget venenatis sollicitudin. Nulla imperdiet lacus nec feugiat pretium. Morbi semper erat ut quam rhoncus, in fermentum nunc ullamcorper. Nam quis nibh at dolor elementum bibendum. Donec vel tellus nec eros lacinia mollis et vel turpis. Aliquam nibh urna, sollicitudin at risus id, placerat vestibulum purus. Mauris in neque nec urna tincidunt sagittis. Donec quis est eu lectus accumsan feugiat. Etiam aliquet lacus mauris, a lobortis orci vulputate quis.'
            
        },
        {
            
            name:'Bob',
            lastname:"Tabor",
            image:"http://russiannobility.org/wp-content/uploads/2014/02/pic106.jpg",
            biography:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra porta sapien vitae mattis. Quisque egestas dictum urna, eu sodales tortor luctus eget. Morbi vitae facilisis est. Curabitur dictum magna eget venenatis sollicitudin. Nulla imperdiet lacus nec feugiat pretium. Morbi semper erat ut quam rhoncus, in fermentum nunc ullamcorper. Nam quis nibh at dolor elementum bibendum. Donec vel tellus nec eros lacinia mollis et vel turpis. Aliquam nibh urna, sollicitudin at risus id, placerat vestibulum purus. Mauris in neque nec urna tincidunt sagittis. Donec quis est eu lectus accumsan feugiat. Etiam aliquet lacus mauris, a lobortis orci vulputate quis.'
            
       
        },
        
         {
            name:'Peter',
            lastname:"Smith",
            image:"http://amador-edc.org/wp-content/uploads/2015/07/writer.jpg",
            biography:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra porta sapien vitae mattis. Quisque egestas dictum urna, eu sodales tortor luctus eget. Morbi vitae facilisis est. Curabitur dictum magna eget venenatis sollicitudin. Nulla imperdiet lacus nec feugiat pretium. Morbi semper erat ut quam rhoncus, in fermentum nunc ullamcorper. Nam quis nibh at dolor elementum bibendum. Donec vel tellus nec eros lacinia mollis et vel turpis. Aliquam nibh urna, sollicitudin at risus id, placerat vestibulum purus. Mauris in neque nec urna tincidunt sagittis. Donec quis est eu lectus accumsan feugiat. Etiam aliquet lacus mauris, a lobortis orci vulputate quis.'
            
        },
        
         {
            name:'John',
            lastname:"Alex",
            image:"https://sharpread.files.wordpress.com/2011/06/christopher.jpg?w=615",
            biography:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra porta sapien vitae mattis. Quisque egestas dictum urna, eu sodales tortor luctus eget. Morbi vitae facilisis est. Curabitur dictum magna eget venenatis sollicitudin. Nulla imperdiet lacus nec feugiat pretium. Morbi semper erat ut quam rhoncus, in fermentum nunc ullamcorper. Nam quis nibh at dolor elementum bibendum. Donec vel tellus nec eros lacinia mollis et vel turpis. Aliquam nibh urna, sollicitudin at risus id, placerat vestibulum purus. Mauris in neque nec urna tincidunt sagittis. Donec quis est eu lectus accumsan feugiat. Etiam aliquet lacus mauris, a lobortis orci vulputate quis.'
            
        }
    ];
    
    var AuthorOne =  {
            name:'John',
            image:"http://clf.ucmo.edu/images/authors/anderson.jpg",
            lastname:"Alex",
            biography:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra porta sapien vitae mattis. Quisque egestas dictum urna, eu sodales tortor luctus eget. Morbi vitae facilisis est. Curabitur dictum magna eget venenatis sollicitudin. Nulla imperdiet lacus nec feugiat pretium. Morbi semper erat ut quam rhoncus, in fermentum nunc ullamcorper. Nam quis nibh at dolor elementum bibendum. Donec vel tellus nec eros lacinia mollis et vel turpis. Aliquam nibh urna, sollicitudin at risus id, placerat vestibulum purus. Mauris in neque nec urna tincidunt sagittis. Donec quis est eu lectus accumsan feugiat. Etiam aliquet lacus mauris, a lobortis orci vulputate quis.'
            
        };
     var bookOne = {title:'Jumping Into C++',
          image:'http://www.cprogramming.com/books/cover_with_border_jumping_into_C++.jpg',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra porta sapien vitae mattis. Quisque egestas dictum urna, eu sodales tortor luctus eget. Morbi vitae facilisis est. Curabitur dictum magna eget venenatis sollicitudin. Nulla imperdiet lacus nec feugiat pretium. Morbi semper erat ut quam rhoncus, in fermentum nunc ullamcorper.', 
          code:'C021', 
          level:'100'};
    
     var books = [{title:'Jumping Into C++',
          image:'http://www.cprogramming.com/books/cover_with_border_jumping_into_C++.jpg',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra porta sapien vitae mattis. Quisque egestas dictum urna, eu sodales tortor luctus eget. Morbi vitae facilisis est. Curabitur dictum magna eget venenatis sollicitudin. Nulla imperdiet lacus nec feugiat pretium. Morbi semper erat ut quam rhoncus, in fermentum nunc ullamcorper.', 
          code:'C021', 
          level:'100'},
          
          {title:'Linux Programming',
          image:'http://it-ebooks.info/images/ebooks/2/professional_linux_programming.jpg',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra porta sapien vitae mattis. Quisque egestas dictum urna, eu sodales tortor luctus eget. Morbi vitae facilisis est. Curabitur dictum magna eget venenatis sollicitudin. Nulla imperdiet lacus nec feugiat pretium. Morbi semper erat ut quam rhoncus, in fermentum nunc ullamcorper.', 
          code:'P201', 
          level:'200'},
          
           {title:'Unix System Programming',
          image:'http://www.itbs.co.uk/images/unix-system-programming-concurrency-threads.jpg',
          description:'In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum nec enim suscipit nisl condimentum luctus.', 
          code:'U201', 
          level:'100'}
          ]

module.exports = function(app){
    
   app.get('/seedAuthors', function(req,res){
     Author.remove({}, function(err){
         if(err){
             console.log(err);
         }
         console.log('Authors removed..')
         
         authors.forEach(function(author){
             Author.create(author,function(err, newAuthor){
                 if(err){
                     console.log(err);
                 }else{
                     Book.create(bookOne, function(err, newBook){
                         if(err){
                             console.log(err);
                         }else{
                             newAuthor.books.push(newBook);
                             newAuthor.save();
                             res.send(newAuthor);
                         }
                     })
                 }
             })
         })
         
     })
   })
}