let React = require("react");
let ReactDOM = require("react-dom")
let {Router, Route, IndexRoute, hashHistory} = require("react-router")
let {Provider} = require("react-redux")


let Main = require("Main")

let actions = require("actions")
let todoApi = require("todoApi")
let store = require("configureStore").configure()

store.dispatch(actions.startAddTodos())

require("style-loader!css-loader!sass-loader!../styles/app.scss")

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>,
    document.getElementById("app")
)