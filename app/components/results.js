// Require dependencies
var React = require("react");
var Result = require('./results/result');

// Define Results class
var Results = React.createClass({
    // Renders the component JSX
    render: function () {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <br />
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">
                                    <strong>
                                        <i className="fa fa-table"></i> Top Articles
                                    </strong>
                                </h3>
                            </div>
                            <div className="panel-body" id="resultsWell">
                                { this.props.results.map(function(result) {
                                    return <Result
                                                result={ result }
                                                key={ result.id }
                                                onResultSave={ function(result) {
                                                    this.props.onArticleSave(result);
                                                }.bind(this) } />
                                }.bind(this)) }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

// Export the component
module.exports = Results;
