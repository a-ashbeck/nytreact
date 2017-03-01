var React = require("react");

var SavedArticles = React.createClass({
    render: function () {
        return (
            <div>Hello my name is {this.props.name}, and I believe in equality
                and non-descrimination on any fronts. Who cares where you are from, I still love you.
            </div>
        );
    }
});
module.exports = SavedArticles;
