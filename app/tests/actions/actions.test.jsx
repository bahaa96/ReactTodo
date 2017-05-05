let expect = require("expect")
let actions = require("actions")

describe("Actions", ()=>{
    it("Should set search text", ()=>{
        let text = "dog"
        let expected = {
            type: "SET_SEARCH_TEXT",
            searchText: text
        }
        expect(actions.setSearchText(text)).toEqual(expected)
    })
    it("Should add todo ", ()=>{
        let text = "Walk tha dog"
        let expected = {
            type: "ADD_TODO",
            text
        }
        expect(actions.addTodo(text)).toEqual(expected)
    })
    it("Should toggle showCompleted", ()=>{
        let expected = {
            type: "TOGGLE_SHOW_COMPLETED"
        }
        expect(actions.toggleShowCompleted()).toEqual(expected)
    })
    it("Should toggle todo ", ()=>{
        let id = 5
        let expected = {
            type: "TOGGLE_TODO",
            id
        }
        expect(actions.toggleTodo(id)).toEqual(expected)
    })
    it("Should add todos ", ()=>{
        let todos = [
            {
                id:1,
                text: "Wash your teeth",
            }
        ]
        expect(actions.addTodos(todos)).toEqual({
            type: "ADD_TODOS",
            todos
        })
    })
})