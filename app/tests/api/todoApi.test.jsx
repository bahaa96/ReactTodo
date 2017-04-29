let expect = require("expect")
let todoApi = require("todoApi")

describe("Todo Api", ()=>{
    beforeEach(()=>{
        localStorage.removeItem("todos")
    })
    it("Should exists", ()=>{
        expect(todoApi).toExist()
    })
    describe("setTodos", ()=>{
        it("Should save the todo if it's valid", ()=>{
            let todos = [
                {
                    id: 1,
                    text: "Call ur Friends",
                    completed: false
                }
            ]
            todoApi.setTodos(todos)
            let actualtodos = todoApi.getTodos()

            expect(actualtodos).toEqual(todos)
        })
        it("Should return an empty if the todo is invalid", ()=>{
            let todos = "Ahmed"
            todoApi.setTodos(todos)
            let actualtodos = localStorage.getItem("todos")

            expect(actualtodos).toBe(null)
        })
    })
    describe("getTodos", ()=>{
        it("Should get the todos", ()=>{
            let todos = [
                {
                    id: 1,
                    text: "Call ur Friends",
                    completed: false
                }
            ]
            todoApi.setTodos(todos)
            let actualtodos = todoApi.getTodos()

            expect(actualtodos).toEqual(todos)
        })
        it("Should return empty array if the todo is invalid", ()=>{
            let todos = "Ahmed"
            todoApi.setTodos(todos)
            let actualtodos = todoApi.getTodos()

            expect(actualtodos).toEqual([])
        })
    })
    describe("filterTodos", ()=>{
        let todos = [
            {
                id: 1,
                text: "Take a shower",
                completed: true
            },
            {
                id: 2,
                text: "Walk the dog",
                completed: false
            }
        ]
        it("Should return all todos ", ()=>{
            let filteredTodos = todoApi.filterTodos(todos, true, "")
            expect(filteredTodos).toEqual(todos.reverse())

        })
        it("Should return the uncompleted todos", ()=>{
            let filteredTodos = todoApi.filterTodos(todos, false, "")
            expect(filteredTodos.length).toBe(1)
        })
        it("Should return sorted todos", ()=>{
            let filteredTodos = todoApi.filterTodos(todos, true, "")
            expect(filteredTodos[0].id).toBe(2)
        })
        it("Should run the search properly", ()=>{
            let filteredTodos = todoApi.filterTodos(todos, true, "dog")
            expect(filteredTodos[0].text).toBe("Walk the dog")

        })
    })


})