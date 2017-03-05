// Require dependency
var React = require("react");

// Define the Result class
var Result = React.createClass({
    // Function to save the selected article
    clickSave: function(event, article) {
        event.preventDefault();

        this.props.onResultSave(article);
    },
    // Renders the component JSX
    render: function () {
        return (
            <div className='well' id={ 'result-' + this.props.result.id }>
                <div className='row'>
                    <h3 className='col-xs-1'>
                        <span className='label label-primary'>{ this.props.result.id + 1 }</span>
                    </h3>
                </div>
                <div className='row'>
                    <div className='col-xs-10'>
                        <h3 className='articleHeadline'>
                            <a href={ this.props.result.url } target="_blank">
                                <strong> { this.props.result.title }</strong>
                            </a>
                        </h3>
                        <h5>{ this.props.result.date }</h5>
                    </div>
                    <div className='col-xs-2'>
                        <hr />
                        <button
                            type='submit'
                            form={ 'hidden-form-' + this.props.result.id }
                            className='btn btn-primary pull-right'
                            
                        >
                            Save
                        </button>
                        <form
                            id={ 'hidden-form-' + this.props.result.id }
                            className='hidden-xs-up'
                            onSubmit={ function(event) {
                                this.clickSave(event, this.props.result);

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
module.exports = Result;
