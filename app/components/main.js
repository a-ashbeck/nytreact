var React = require('react');
var SearchBar = require('./searchBar');
var Results = require('./results');
var SavedArticles = require('./savedArticles');
var axios = require('axios');

var authKey = "b80327eafb814e47b56742e9cf7732c5";
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

var Main = React.createClass({
    // getInitialState: function() {
    //     return {
    //         searchTerm: '',
    //         numberArticles: 5,
    //         startYear: '',
    //         endYear: '',
    //         results: [],
    //         savedArticles: []
    //     }
    // },

    // componentDidMount: function() {
    //   axios.get('/api/articles/').then(function(response) {
    //     this.setState({ savedArticles: response.data });
    //   }.bind(this));
    // },

    // handleUserInput: function(obj) {
    //     this.setState(obj);
    // },

    // handleFormSubmit: function() {
    //   var queryURL = queryURLBase + this.state.searchTerm;
    //   if (parseInt(this.state.startYear)) {
    //       queryURL = queryURL + "&begin_date=" + this.state.startYear + "0101";
    //   }

    //   if (parseInt(this.state.endYear)) {
    //       queryURL = queryURL + "&end_date=" + this.state.endYear + "0101";
    //   }

    //   axios.get(queryURL, function(NYTData) {
    //       this.addArticles(NYTData, this.state.numberArticles);
    //   }.bind(this));
    // },

    // addArticles: function(NYTData, numberOfArticles) {
    //   var articles = [];
    //   for (var i = 0; i < numberOfArticles; i++) {
    //       var localObject = {};
    //       localObject.id = i;
    //       localObject.title = NYTData.response.docs[i].headline.main;
    //       localObject.link = NYTData.response.docs[i].web_url;
    //       localObject.date = NYTData.response.docs[i].pub_date;
    //       localObject.sectionName = NYTData.response.docs[i].section_name;

    //       if(NYTData.response.docs[i].byline &&
    //           NYTData.response.docs[i].byline.hasOwnProperty("original")) {
    //           localObject.originalByline = NYTData.response.docs[i].byline.original;
    //       }
    //       articles.push(localObject)
    //   }
    //   this.setState({
    //       results: articles
    //   });
    // },

    render: function() {
        return (
            <div>
                <div class="container">
                    <div class="jumbotron" style="background-color: #20315A ; color: white;">
                        <h1 class="text-center"><strong><i class="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
                    </div>
                    <SearchBar searchBar={this.state.searchBar} />
                    <Results results={ this.state.results } />
                    <SavedArticles savedArticles={ this.state.savedArticles } />
                </div>
            </div>
        )
    }
});

module.exports = Main;
