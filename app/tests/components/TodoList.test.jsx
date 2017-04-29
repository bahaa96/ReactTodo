let React = require("react")
let expect = require("expect")
let TestUtils = require("react-addons-test-utils")

let TodoList = require("TodoList")
let Todo = require("Todo")

describe("TodoList", ()=>{
    it("Should exists", ()=>{
        expect(TodoList).toExist()
    })
    it("Should render a Todo component for each todo", ()=>{
        let todos = [
            {
                id: 1,
                text: "Feed  Ducks"
            },
            {
                id: 2,
                text: "Walk dog"
            }
        ]
        let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>)
        let todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo)
        expect(todoComponents.length).toBe(todos.length)
    })
})
