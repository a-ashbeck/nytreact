var Results = require("./results");
var React = require("react");

var SearchBar = React.createClass({

    // Here we set a generic state associated with the text being searched for
    // getInitialState: function() {
    //     return { term: "", numRecordsSelect: 0, startYear: "", endYear: "" };
    // },
    // This function will respond to the user input
    handleChange: function(event) {
        // Here we create syntax to capture any change in text to the query terms (pre-search).
        var newState = {};

        newState[event.target.name] = event.target.value;
        this.props.onInput(newState);
    },
    // When a user submits...
    handleSubmit: function(event) {
        // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
        // clicking the button
        event.preventDefault();

        // Set the parent to have the search term
        this.props.onFormSubmit();
    },
    render: function () {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                    <br />
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title"><strong><i className="fa fa-list-alt"></i> Search Parameters</strong></h3>
                            </div>
                            <div className="panel-body">

                                <form 
                                    onSubmit={function(event) {
                                                this.handleSubmit(event);
                                            }.bind(this)} 
                                    role="form"
                                >

                                    <div className="form-group">
                                        <label htmlFor="search">Search Term:</label>
                                        <input
                                            type="text"
                                            value={this.props.term}
                                            className="form-control"
                                            id="term"
                                            name="term"
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="pwd">Number of Records to Retrieve:</label>
                                        <select
                                            type="number"
                                            className="form-control"
                                            value={this.props.numRecordsSelect}
                                            id="numRecordsSelect"
                                            name="numRecordsSelect"
                                            onChange={this.handleChange}
                                        >
                                            <option value="1">1</option>
                                            <option value="5">5</option>
                                            <option value="10">10</option>
                                        </select>             
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="startYear">Start Year (Optional):</label>
                                        <input
                                            type="text"
                                            value={this.props.startYear}
                                            className="form-control"
                                            id="startYear"
                                            name="startYear"
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="endYear">End Year (Optional):</label>
                                        <input
                                            type="text"
                                            value={this.props.endYear}
                                            className="form-control"
                                            id="endYear"
                                            name="endYear"
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-default"
                                        id="runSearch"
                                    >
                                        <i className="fa fa-search"></i> 
                                        Search
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-default"
                                        id="clearAll"
                                    >
                                        <i className="fa fa-trash"></i>
                                         Clear Results
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = SearchBar;
