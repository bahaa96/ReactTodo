import React from "react"
import ReactDOM from "react-dom"
import {hashHistory} from "react-router"
import {Provider} from "react-redux"
import Router from "app/router/"

import * as actions from "actions"
let store = require("configureStore").configure()
import firebase from "firebase"

firebase.auth().onAuthStateChanged((user)=>{
    if (user){
        store.dispatch(actions.login(user))
        store.dispatch(actions.startAddTodos())
        hashHistory.push("/todos")
    }else {
        store.dispatch(actions.logout())
        hashHistory.push("/")
    }
})

require("style-loader!css-loader!sass-loader!../styles/app.scss")


ReactDOM.render(
    <Provider store={store}>
        {Router}
    </Provider>,
    document.getElementById("app")
)