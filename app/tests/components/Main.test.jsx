let React = require("react")
let expect = require("expect")
let TestUtils = require("react-addons-test-utils")

let Main = require("Main")

describe("Main", ()=>{
    it("Should exists", ()=>{
        expect(Main).toExist()
    })
    it("Should add a new todo", ()=>{
        let main = TestUtils.renderIntoDocument(<Main/>)
        main.setState({todos:[]})
        main.handleNewTodo("Eat")

        expect(main.state.todos[0].text).toBe("Eat")
        expect(main.state.todos[0].createdAt).toBeA("number")

    })
    it("Should toggle the status when I call onToggle", ()=>{
        let main = TestUtils.renderIntoDocument(<Main/>)
        let todo = {
            id: 1,
            text: "Call ur Friends",
            completed: false
        }
        main.setState({todos: [todo]})
        main.handleToggle(todo.id)
        expect(main.state.todos[0].completed).toBe(true)
        expect(main.state.todos[0].completedAt).toBeA("number")

    })
    it("should remove completedAt when we toggle fromm true to false", ()=>{
        let main = TestUtils.renderIntoDocument(<Main/>)
        let todos = main.state.todos
        let todo = todos[0]
        main.handleToggle(todo.id)
        main.setState({
            todos: todos
        })
        expect(main.state.todos[0].completedAt).toBe(undefined)
    })
})
