var React = require("react");
var ReactDOM = require("react-dom");
var SearchBar = require("./components/roster");

var app = document.getElementById("app");

ReactDOM.render(
    <div>
    		<div class="container">
    				<div class="jumbotron" style="background-color: #20315A ; color: white;">
								<h1 class="text-center"><strong><i class="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
						</div>
        		<SearchBar />
        		<div class="row">
						    <div class="col-sm-12">
						        <hr>
						        <h5 class="text-center"><small>Made by Ahmed with lots and lots of <i class="fa fa-heart"></i></small></h5>
						    </div>
						</div>
       	</div>
    </div>
, app);
