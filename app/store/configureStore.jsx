import * as redux from "redux"
import thunk from "redux-thunk"

let {searchTextReducer, showCompletedReducer, todosReducer, authReducer} = require("reducers")


export let configure = (initialState)=>{
    let reducer = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted : showCompletedReducer,
        todos: todosReducer,
        auth: authReducer
    })
    let store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ))

    return store
}