// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

var authKey = "b80327eafb814e47b56742e9cf7732c5";

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(term, numRecordsSelect, startYear, endYear) {

    console.log(term + " " + numRecordsSelect + " " + startYear + " " + endYear);

    // Figure out the geosearch
    var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

    var queryURL = queryURLBase + term;

    // If the user provides a startYear -- the startYear will be included in the queryURL
    if (parseInt(startYear)) {
      queryURL = queryURL + "&begin_date=" + startYear + "0101";
    }

    // If the user provides a endYear -- the endYear will be included in the queryURL
    if (parseInt(endYear)) {
      queryURL = queryURL + "&end_date=" + endYear + "0101";
    }

    return axios.get(queryURL).then(function(response) {
      // If get a result, return that result's formatted address property
      if (response.data.results[0]) {
        return response.data.results[0];
      }
      // If we don't get any results, return an empty string
      return "LOOKS LIKE THERE'S NOTHING HERE...";
    });
  },

  // This function hits our own server to retrieve the record of query results
  getSavedArticles: function() {
    return axios.get("/api/saved");
  },

  // This function posts new searches to our database.
  postSavedArticle: function(article) {
    return axios.post("/api/saved", { article: article });
  }
};

// We export the API helper
module.exports = helper;
