var React = require('react');

var SearchBar = require('./children/searchBar');
var Results = require('./children/results');
var SavedArticles = require('./children/savedArticles');

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

var Main = React.createClass({

    // Here we set a generic state associated with the number of clicks
    // Note how we added in this articles state variable
    getInitialState: function() {
        return { 
            term: "",
            numRecordsSelect: 5,
            startYear: "",
            endYear: "" ,
            results: [],
            articles: []
        };
    },
    handleUserInput: function(object) {
        this.setState(object);
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
    // handleFormSubmit: function() {


    //     // Run the query for the address
    //     helpers.runQuery(this.state.searchTerm).then(function(data) {
    //         if (data !== this.state.results) {
    //             console.log("Article", data);
    //             this.setState({ results: data });

    //             // THIS AUTSAVES ARTICLES. CHANGE LATER!!!!
    //             // After we've received the result... then post the search term to our articles.
    //             helpers.postArticle(this.state.searchTerm).then(function() {
    //                 console.log("Updated!");

    //                 // After we've done the post... then get the updated articles
    //                 helpers.getSavedArticles().then(function(response) {
    //                     console.log("Current Articles", response.data);

    //                     this.setState({ articles: response.data });

    //                 }.bind(this));
    //             }.bind(this));
    //         }
    //     }.bind(this));
    // },
    handleFormSubmit: function() {
      var queryURL = queryURLBase + this.state.searchTerm;
      if (parseInt(this.state.startYear)) {
          queryURL = queryURL + "&begin_date=" + this.state.startYear + "0101";
      }

      if (parseInt(this.state.endYear)) {
          queryURL = queryURL + "&end_date=" + this.state.endYear + "0101";
      }

      axios.get(queryURL).then(function(NYTData) {
          this.addArticles(NYTData, this.state.numberArticles);
      }.bind(this));
    },

    addArticles: function(NYTData, numberOfArticles) {
        var articles = [];
        for (var i = 0; i < numberOfArticles; i++) {
            var article = NYTData.data.response.docs[i];
            var localObject = {};
            localObject.id = i;
            localObject.title = article.headline.main;
            localObject.link = article.web_url;
            localObject.date = article.pub_date;
            localObject.sectionName = article.section_name;

            if(article.byline && article.byline.hasOwnProperty("original")) {
                localObject.originalByline = article.byline.original;
            }
            articles.push(localObject)
        }
        this.setState({
            topArticles: articles
        });
    },
    // // This function allows childrens to update the parent.
    // setTerm: function(term) {
    //     this.setState({ setTerm: term });
    // },
    // // This function allows childrens to update the parent.
    // setNumRecordsSelect: function(numRecordsSelect) {
    //     this.setState({ setNumRecordsSelect: numRecordsSelect });
    // },
    // // This function allows childrens to update the parent.
    // setStartYear: function(startYear) {
    //     this.setState({ setStartYear: startYear });
    // },
    // // This function allows childrens to update the parent.
    // setEndYear: function(endYear) {
    //     this.setState({ setEndYear: endYear });
    // },
    render: function() {
        return ( 
            <div>
                <div className="container" >
                    <div className="jumbotron" >
                        <h1 className="text-center" > <strong > <i className="fa fa-newspaper-o" > </i> New York Times Search</strong></h1>
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
                    <Results results={ this.state.results }/> 
                    <SavedArticles savedArticles={ this.state.savedArticles }/> 
                </div>
            </div>
        )
    }
});

module.exports = Main;
