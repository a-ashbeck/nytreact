// Require dependencies
var Article = require('../models/Article.model');
var cheerio = require('cheerio');
var request = require('request');

// Export app routes
module.exports = function(app) {
    app.get('*', function(req, res) {
        res.sendFile(__dirname + "/public/index.html");
    });

    // 
    app.get('/api/saved', function(req, res) {
        Article.find({}).exec(function(err, doc) {
            if (err) {
                console.log(err);
            } else {
                res.send(doc);
            }
        });
    });

    // This is the route used to save an article
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

    app.delete('/api/saved', function(req, res) {
        // Load the req.body.id into a variable for ease of use
        var articleId = req.body.id;
        // Remove the appropriate comments
        Comment.remove({ _id: articleId }, function(err, article) {
            if (err) {
                // If error, send error
                res.send(err);
            }
        });

    });
};
