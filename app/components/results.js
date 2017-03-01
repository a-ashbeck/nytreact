var React = require("react");
var SavedArticles = require("./savedArticles");

var Results = React.createClass({
    getInitialState: function () {
        return {
            counter: 0
        };
    },
    handleClick: function (event) {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    render: function () {
        var myStyle = {border: "1px solid red"};
        console.log(this.props);
        return (
            <div style={myStyle}>
                I am a Results {this.props.name} | {this.props.age} | {this.props.grade}
                <button onClick={this.handleClick}>Click For Counter {this.state.counter}</button>
                <hr />
                <SavedArticles name={this.props.name}/>
            </div>
        );
    }
});

module.exports = Results;
