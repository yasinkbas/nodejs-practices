var express = require('express');
var router = express.Router();

// Models
const Book = require('../models/Book');


router.post('/new', function(req, res, next) {
    const book = new Book({
      title: 'UdemyaaaNodejs',
      published: true,
      comments: [
        {message: "this book is wonderful"},
        {message: "I don't like so much"}
      ],
      meta: {
        votes: 12,
        favs: 104
      }
    });
    book.save((err, data) => {
        if (err) console.log(err)
        res.json(data)
    });
  });


  router.get('/search',(req,res) => {
    /**
     * first @param search field
     * second @param wanted response values
     * third @param function
     */
    Book.find({published: true,title: "UdemyaaaNodejs"},'title comments', (err, data) => {
      res.json(data);
    })
  });

  router.get('/searchone',(req,res) => {
      Book.findOne({title: "UdemyaaaNodejs"}, (err,data) => {
          res.json(data)
      })
  })

  router.put('/update', (req,res) => {
    Book.update({published: false}, {published: true}, (err,data) => {
      
    })
  })

module.exports = router;