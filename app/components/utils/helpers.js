// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NYT authkey and query string
var authKey = "b80327eafb814e47b56742e9cf7732c5";
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

// Helper functions for making API Calls
var helpers = {
    // GET request for saved articles
    getSavedArticles: function(this) {
        axios.get('/api/saved/').then(function(this, res) {
            this.setState({ savedArticles: res.data });
        }.bind(this));
    },
    // Function to handle the NYT API query
    handleFormSubmit: function(this) {
        var queryURL = queryURLBase + this.state.term;
        if (parseInt(this.state.startYear)) {
            queryURL = queryURL + "&begin_date=" + this.state.startYear + "0101";
        }

        if (parseInt(this.state.endYear)) {
            queryURL = queryURL + "&end_date=" + this.state.endYear + "0101";
        }

        // Axios query of the NYT API
        axios.get(queryURL).then(function(dataObj) {
            this.addResultsToArray(dataObj, this.state.numRecordsSelect);
        }.bind(this));
    },
    // Saves the selected result
    handleArticleSave: function(this, article) {
        var newArticle = {
            title: article.title,
            url: article.url,
            date: article.date
        };

        // Axios POST request to save article
        axios.post('/api/saved', newArticle)
            .then(function (response) {
                this.state.savedArticles.push(response.data);
                this.setState({
                    savedArticles: this.state.savedArticles
                });
            }.bind(this));
    },
    // Axios DELETE request to remove a saved article
    handleArticleDelete: function(articleId) {
        axios.delete('/api/saved/' + articleId, {});
    },
};

// We export the API helper
module.exports = helpers;
