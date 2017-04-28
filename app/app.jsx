let React = require("react");
let ReactDOM = require("react-dom")
let {Router, Route, IndexRoute, hashHistory} = require("react-router")
let Main = require("Main")

require("style-loader!css-loader!sass-loader!../styles/app.scss")

ReactDOM.render(
    <Main/>,
    document.getElementById("app")
)