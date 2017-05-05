let expect = require("expect")
let reducers = require("reducers")
let df = require("deep-freeze-strict")

describe("Reducers", ()=>{
    describe("searchTextReducer", ()=>{
        it("Should set search text", ()=>{
            let action = {
                type: "SET_SEARCH_TEXT",
                searchText: "dog"
            }
            let reducer = reducers.searchTextReducer(df(""), df(action))
            expect(reducer).toEqual(action.searchText)

        })
        it("Should return the default state", ()=>{
            let action = {
                type: "",
            }
            let reducer = reducers.searchTextReducer(df(""), df(action))
            expect(reducer).toBe("")
        })
    })
    describe("TodosReducer", ()=>{
        it("Should add a todo", ()=>{
            let action = {
                type: "ADD_TODO",
                text: "Feed the cat"
            }
            let reducer = reducers.todosReducer(df([]), df(action))
            expect(reducer.length).toBe(1)
            expect(reducer[0].text).toBe(action.text)
        })
        it("Should toggle a todo", ()=>{
            let action = {
                type: "TOGGLE_TODO",
                id: 1
            }
            let reducer = reducers.todosReducer(df([{text: "Walk tha dog", id:1, completed: false}]), df(action))
            expect(reducer[0].completed).toBe(true)
        })
        it("Should return empty default state", ()=> {
            let action = {type: ""}
            let reducer = reducers.todosReducer(df([{text: "Walk tha dog", id: 1}]), df(action))
            expect(reducer.length).toBe(1)
        })
    })
    describe("showCompletedReducer", ()=>{
        it("Should toggle showCompleted", ()=>{
            let action = {
                type: "TOGGLE_SHOW_COMPLETED"
            }
            let reducer = reducers.showCompletedReducer(df(false), df(action))
            expect(reducer).toBe(true)
        })
        it("Should return the default state", ()=>{
            let action = {
                type: ""
            }
            let reducer = reducers.showCompletedReducer(df(false), df(action))
            expect(reducer).toBe(false)
        })
    })
})