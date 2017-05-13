import React from "react"
import {Router, Route, IndexRoute, hashHistory} from "react-router"

import Login from "Login"
import firebase from "app/firebase/"
import Main from "Main"

let requireLogin = (nextState, replace, next)=>{
    if (!firebase.auth().currentUser){
        replace("/")
    }
    next()
}

let redirectIfLoggedIn = (nextState, replace, next) =>{
    if (firebase.auth().currentUser){
        replace("/todos")
    }
    next()
}

export default (
    <Router history={hashHistory}>
        <Route path={"/"}>
            <Router path="todos" component={Main} onEnter={requireLogin}/>
            <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
        </Route>
    </Router>
)