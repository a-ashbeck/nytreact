var Results = require("./results");
var React = require("react");

var SearchBar = React.createClass({
    render: function () {

        return (
            <div>
                <h1>Student Roster</h1>
                <hr />
                <Student friends={["Joe", "Dee", "Marko"]} name="Brock Strongo" age="14" grade="9000" />
                <Student name="Lance Uppercut" />
                <Student name="Princess Penelope Merryweather" age="16" grade="9001" />
            </div>
        );
    }
});

module.exports = SearchBar;
