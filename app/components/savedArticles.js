// Require dependencies
var React = require("react");
var SavedArticle = require('./savedArticles/savedArticle');

// Define SavedArticles class
var SavedArticles = React.createClass({
    // Render component JSX
    render: function () {
        return (
            <div>   
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            <strong>
                                <i className="fa fa-file-text-o"></i> Saved Articles
                            </strong>
                        </h3>
                    </div>
                    <div className="panel-body" id="savedWell">
                        { this.props.savedArticles.map(function(savedArticle) {
                            return <SavedArticle
                                        savedArticle={ savedArticle }
                                        key={ savedArticle.id }
                                        onSavedArticleDelete={ function(savedArticle) {
                                            this.props.onArticleDelete(savedArticle);
                                        }.bind(this) } />
                        }.bind(this)) }
                    </div>
                </div>
            </div>
        );
    }
});

// Export the component
module.exports = SavedArticles;
