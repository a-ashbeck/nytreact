// Require dependency
var React = require("react");

// Define the SavedArticle class
var SavedArticle = React.createClass({
    // Function to delete the article selected
    clickDelete: function(event, article) {
        event.preventDefault();

        this.props.onSavedArticleDelete(article);
    },
    // Render the component JSX
    render: function () {
        return (
            <div className='well' id={ 'savedArticle-' + this.props.savedArticle._id }>
                <div className='row'>
                    <div className='col-xs-10'>
                        <h3 className='articleHeadline'>
                            <a href={ this.props.savedArticle.url } target="_blank">
                                <strong>{ this.props.savedArticle.title }</strong>
                            </a>
                        </h3>
                        <h5>{ this.props.savedArticle.date }</h5>
                    </div>
                    <div className='col-xs-2'>
                        <hr />
                        <button
                            type='submit'
                            form={ 'hidden-form-' + this.props.savedArticle._id }
                            className='btn btn-primary pull-right'
                            
                        >
                            Delete
                        </button>
                        <form
                            id={ 'hidden-form-' + this.props.savedArticle._id }
                            className='hidden-xs-up'
                            onSubmit={ function(event) {
                                this.clickDelete(event, this.props.savedArticle._id);

                                // This keeps the page from refreshing
                                return false;
                            }.bind(this) }
                        >
                        </form>
                    </div>
                </div>
            </div>
        );
    }
});

// Export the component
module.exports = SavedArticle;
