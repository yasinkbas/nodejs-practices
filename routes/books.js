var express = require('express');
var router = express.Router();

// Models
const Book = require('../models/Book');


router.post('/new', function(req, res, next) {
    const book = new Book({
      title: 'UdemyNodejs',
      published: false,
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
    })
  });


module.exports = router;