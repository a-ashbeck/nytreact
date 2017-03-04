var React = require("react");

var SavedArticles = React.createClass({
    render: function () {
        return (
            <div>   
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title"><strong><i className="fa fa-file-text-o"></i> Saved Articles</strong></h3>
                    </div>
                    <div className="panel-body" id="savedWell">
                        {this.props.articles}
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = SavedArticles;


// .map(function(article, i) {
//                             return (
//                                 <div>
//                                     <p key={i}>{article.title}</p>
//                                     <p key={i}>{article.date}</p>
//                                     <p key={i}>{article.url}</p>
//                                 </div>
//                             );
//                         })