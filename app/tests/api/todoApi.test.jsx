let expect = require("expect")
let todoApi = require("todoApi")

describe("Todo Api", ()=>{
    beforeEach(()=>{
        localStorage.removeItem("todos")
    })
    it("Should exists", ()=>{
        expect(todoApi).toExist()
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