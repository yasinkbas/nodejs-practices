// Setup
var nunjucks = require('nunjucks');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();


//routes
app.get('/',(req,res) => {
    Post.find({}, (err, posts) => {
        res.render('index.njk', { posts: posts})
    });
});

app.post('/addpost', (req,res) => {
    var postData = new Post(req.body);
    postData.save().then( result => {
        res.redirect('/');
    }).catch(err => {
        res.status(400).send("Unable to save data");
    });
});


// db
mongoose.connect('mongodb://localhost:27017/node-blog', { useNewUrlParser: true});


//Schema
var postSchema = new mongoose.Schema({body : String});
var Post = mongoose.model('Post', postSchema);


//sets
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

nunjucks.configure('views', {
    express: app,
    autoescape: true
});

app.set('view engine', 'html');


// Listen
app.listen(3000, console.log('Server listening on 3000'));




