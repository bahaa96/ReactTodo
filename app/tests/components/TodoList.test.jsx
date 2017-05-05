let React = require("react")
let expect = require("expect")
let ReactDOM = require("react-dom")
let TestUtils = require("react-addons-test-utils")

import connectedTodoList, {TodoList} from "TodoList"
import Provider from "react-redux/src/components/Provider";
import connectedTodo, {Todo} from  "Todo"
import {configure} from "configureStore"

describe("TodoList", ()=>{
    it("Should exists", ()=>{
        expect(TodoList).toExist()
    })
    it("Should render a Todo component for each todo", ()=>{
        let todos = [
            {
                id: 1,
                text: "Feed  Ducks",
                completed: false,
                completedAt: undefined,
                createdAt: 500
            },
            {
                id: 2,
                text: "Walk dog",
                completed: false,
                completedAt: undefined,
                createdAt: 500
            }
        ]
        let store = configure({
            todos
        })
        let provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <connectedTodoList/>
            </Provider>)
        let todoList = TestUtils.scryRenderedComponentsWithType(provider, connectedTodoList)[0]
        let todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, connectedTodo)
        expect(todoComponents.length).toBe(todos.length)
    })
    it("Should return empty message while there're no todos", ()=>{
        let todos = []
        let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>)
        let $el = $(ReactDOM.findDOMNode(todoList))
        expect($el.find("h3").length).toBe(1)
    })
})
