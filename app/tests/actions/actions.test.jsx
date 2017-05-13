import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import expect from "expect"

import * as actions from "actions"


let createMockStore = configureMockStore([thunk])

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
        let todo = {
            id: "abc123",
            text: "Walk th dog",
            createdAt: 6500,
            completed: false
        }
        let expected = {
            type: "ADD_TODO",
            todo
        }
        expect(actions.addTodo(todo)).toEqual(expected)
    })
    it("Should toggle showCompleted", ()=>{
        let expected = {
            type: "TOGGLE_SHOW_COMPLETED"
        }
        expect(actions.toggleShowCompleted()).toEqual(expected)
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
    it(" Should create todo and dispatch ADD_TODO", (done)=>{
        let store = createMockStore({})
        let todoText = "Clean your room"
        store.dispatch(actions.startAddTodo(todoText)).then(()=>{
            let actions = store.getActions()
            expect(actions[0]).toInclude({
                type: "ADD_TODO"
            })
            expect(actions[0].todo).toInclude({
                text: todoText
            })
            done()
        }).catch(done)
    })
    it("Should toggle todo and dispatch UPDATE_TODO", (done)=>{
        let store = createMockStore({})
        let todoText = "Clean your room"
        store.dispatch(actions.startToggleTodo(1, true)).then(()=> {
            let actions = store.getActions()
            expect(actions[0].id).toBe(1)
            expect(actions[0].updates.completed).toBe(true)
            done()
        }).catch(done)
    })
    it("Should login & return the current user id", ()=>{
        let uid = 120
        let actual = actions.login(uid)
        expect(actual.uid).toBe(uid)
    })  
    it("Should logout", ()=>{
        let actual = actions.logout()
        expect(actual).toInclude({ type: "LOGOUT" })
    })
})