let redux = require("redux")
let {searchTextReducer, showCompletedReducer, todosReducer} = require("reducers")

let todoApi = require("todoApi")

export let configure = (initialState)=>{
    let reducer = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted : showCompletedReducer,
        todos: todosReducer
    })
    let store = redux.createStore(reducer, initialState, redux.compose(

        window.devToolsExtension ? window.devToolsExtension() : f => f
    ))
    store.subscribe(()=>{
        let currentState = store.getState()
        todoApi.setTodos(currentState.todos)

    })
    return store
}