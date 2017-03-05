// Require dependencies
var React = require('react');

// Require top level components
var SearchBar = require('./searchBar.js');
var Results = require('./results.js');
var SavedArticles = require('./savedArticles.js');

var axios = require("axios");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// NYT authkey and query string
var authKey = "b80327eafb814e47b56742e9cf7732c5";
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

// Define the Main component class
var Main = React.createClass({
    // Gets the initial state of these properties on the page
    getInitialState: function() {
        return { 
            term: "",
            numRecordsSelect: 5,
            startYear: "",
            endYear: "" ,
            results: [],
            savedArticles: []
        };
    },
    // Sets the state after user interaction
    handleUserInput: function(object) {
        this.setState(object);
    },
    // Get saved articles when page renders
    componentDidMount: function() {
        this.getSavedArticles()
    },
    // Update components based on any changes
    componentDidUpdate: function() {
        this.getSavedArticles()
    },
    // GET request for saved articles
    getSavedArticles: function() {
        axios.get('/api/saved/').then(function(res) {
            this.setState({ savedArticles: res.data });
        }.bind(this));
    },
    // Function to handle the NYT API query
    handleFormSubmit: function() {
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
    // Adds the search results to the articles array
    addResultsToArray: function(dataObj, numRecordsSelect) {
        var articles = [];
        for (var i = 0; i < numRecordsSelect; i++) {
            var article = dataObj.data.response.docs[i];
            var localObject = {};
            localObject.id = i;
            localObject.title = article.headline.main;
            localObject.url = article.web_url;
            localObject.date = article.pub_date;

            articles.push(localObject)
        }
        this.setState({
            results: articles
        });
    },
    // Saves the selected result
    handleArticleSave: function(article) {
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
    // Renders compnent JSX
    render: function() {
        return ( 
            <div>
                <div className="container">
                    <div className="jumbotron">
                        <h1 className="text-center">
                            <strong >
                                <i className="fa fa-newspaper-o" ></i> New York Times Search
                            </strong>
                        </h1>
                    </div>
                    <SearchBar
                        term={this.state.term}
                        numRecordsSelect={this.state.numRecordsSelect}
                        startYear={this.state.startYear}
                        endYear={this.state.endYear}
                        onInput={function(object) {
                            this.handleUserInput(object);
                        }.bind(this)}
                        onFormSubmit={function() {
                            this.handleFormSubmit();
                        }.bind(this)}
                    /> 
                    <Results 
                        results={ this.state.results }
                        onArticleSave={ function(article) {
                             this.handleArticleSave(article)
                         }.bind(this) }
                    />
                    <SavedArticles
                        savedArticles={ this.state.savedArticles }
                        onArticleDelete={ function(articleId) {
                            this.handleArticleDelete(articleId)
                        }.bind(this) }
                    />
                </div>
            </div>
        )
    }
});

// Exports the component
module.exports = Main;
