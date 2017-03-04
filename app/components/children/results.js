var React = require("react");

var Results = React.createClass({
    clickSave: function (event) {
        // this.setState({
        //     counter: this.state.counter + 1
        // });
    },
    render: function () {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <br />
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title"><strong><i className="fa fa-table"></i> Top Articles</strong></h3>
                            </div>
                            <div className="panel-body" id="resultsWell">
                                {this.props.results.map(function(search, i) {
                                    return (
                                        <div>
                                            <a id={search.id} href={search.link} key={i}>{search.title} --- {search.date}</a>
                                            <button
                                                key={i}
                                                // onClick={this.clickSave}
                                            >
                                                Save
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Results;

// .map(function(search, i) {
//                                     return (
//                                         <div>
//                                             <p key={i}>{search.title}</p>
//                                             <p key={i}>{search.date}</p>
//                                             <p key={i}>{search.url}</p>
//                                             <button
//                                                 key={i}
//                                                 onClick={this.clickSave}
//                                             >
//                                                 Save
//                                             </button>
//                                         </div>
//                                     );
//                                 })