var React = require('react');

var SearchBar = require('./searchBar');
var Results = require('./results');
var SavedArticles = require('./savedArticles');

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

var Main = React.createClass({

    // Here we set a generic state associated with the number of clicks
    // Note how we added in this articles state variable
    getInitialState: function() {
        return { searchTerm: "", results: "", articles: [] };
    },

    // The moment the page renders get the Articles
    componentDidMount: function() {
        // Get the latest articles.
        helpers.getSavedArticles().then(function(response) {
            console.log(response);
            if (response !== this.state.articles) {
                console.log("Articles", response.data);
                this.setState({ articles: response.data });
            }
        }.bind(this));
    },

    // If the component changes (i.e. if a search is entered)...
    componentDidUpdate: function() {

        // Run the query for the address
        helpers.runQuery(this.state.searchTerm).then(function(data) {
            if (data !== this.state.results) {
                console.log("Article", data);
                this.setState({ results: data });

                // THIS AUTSAVES ARTICLES. CHANGE LATER!!!!
                // After we've received the result... then post the search term to our articles.
                helpers.postArticle(this.state.searchTerm).then(function() {
                    console.log("Updated!");

                    // After we've done the post... then get the updated articles
                    helpers.getSavedArticles().then(function(response) {
                        console.log("Current Articles", response.data);

                        this.setState({ articles: response.data });

                    }.bind(this));
                }.bind(this));
            }
        }.bind(this));
    },
    // This function allows childrens to update the parent.
    setTerm: function(term) {
        this.setState({ setTerm: term });
    },

    render: function() {
        return ( 
            <div>
                <div className="container" >
                    <div className="jumbotron" style="background-color: #20315A ; color: white;" >
                        <h1 className="text-center" > <strong > <i className="fa fa-newspaper-o" > </i> New York Times Search</strong></h1>
                    </div>
                    <SearchBar setForm={ this.setForm }/> 
                    <Results results={ this.state.results }/> 
                    <SavedArticles savedArticles={ this.state.savedArticles }/> 
                </div>
            </div>
        )
    }
});

module.exports = Main;
