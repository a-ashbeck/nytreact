// Require dependencies
var Article = require('../models/Article.model');
var cheerio = require('cheerio');
var request = require('request');

// Export app routes
module.exports = function(app) {
    // HTML route for /
    app.get('/', function(req, res) {
        res.send('index.html');
    });

    // API route for getting saved articles
    app.get('/api/saved', function(req, res) {
        Article.find({}).exec(function(err, doc) {
            if (err) {
                console.log(err);
            } else {
                res.send(doc);
            }
        });
    });

    // API route used to save an article
    app.post('/api/saved', function(req, res) {
        Article.create({
            title: req.body.title,
            date: req.body.date,
            url: req.body.url
        },
        function(err) {
            if (err) {
                console.log(err);
            }
        });

    });

    // API route for deleting a saved article
    app.delete('/api/saved/:id', function(req, res) {
        var articleId = req.params.id;
        Article.remove({ _id: articleId }, function(err, article) {
            if (err) {
                res.send(err);
            }
        });

    });
};
