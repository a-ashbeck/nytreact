var React = require("react");
var SavedArticles = require("./savedArticles");

var Results = React.createClass({
    clickSave: function (event) {
        // this.setState({
        //     counter: this.state.counter + 1
        // });
    },
    render: function () {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <br />
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title"><strong><i className="fa fa-table"></i> Top Articles</strong></h3>
                        </div>
                        <div className="panel-body" id="resultsWell">
                            {/* Here we use a map function to loop through an array in JSX */}
                            {this.props.results(function(search, i) {
                                return (
                                    <p key={i}>{search.title}</p>
                                    <p key={i}>{search.date}</p>
                                    <p key={i}>{search.url}</p>
                                    <button>Save</button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Results;
