// Require dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Require the Main component
var Main = require("./components/main");

// Set app to the div on the index.html
var app = document.getElementById("app");

// Render the application to the DOM
ReactDOM.render(<Main />, app);
