// Require dependencies
var Article = require('../models/Article.model');
var cheerio = require('cheerio');
var request = require('request');

// Export app routes
module.exports = function(app) {
    app.get('/', function(req, res) {
        res.sendFile(__dirname + "/public/index.html");
    });

    // 
    app.get('/api', function(req, res) {
        Article.find({}).exec(function(err, doc) {
            if (err) {
                console.log(err);
            } else {
                res.send(doc);
            }
        });
    });

    // This is the route used to save an article
    app.post('/api', function(req, res) {
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
};
