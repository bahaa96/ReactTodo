let React = require("react")
let TestUtils = require("react-addons-test-utils")
let expect = require("expect")
let ReactDOM = require("react-dom")
import * as actions from "actions"
let {AddTodo} = require("AddTodo")

describe("AddTodo", ()=>{
    it("Should exists", ()=>{
        expect(AddTodo).toExist()
    })
    it("Should dispatch ADD_TODO When valid data", ()=>{
        let spy = expect.createSpy()
        let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>)
        let $el = $(ReactDOM.findDOMNode(addTodo))
        addTodo.refs.text.value = "Hello"
        $el.find("button")[0].click()
        expect(spy).toHaveBeenCalledWith(actions.startAddTodo("Hello"))
    })
    it("Should not dispatch ADD_TODO when invalid todo data ", ()=>{
        let spy = expect.createSpy()
        let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>)
        let $el = $(ReactDOM.findDOMNode(addTodo))
        addTodo.refs.text.value = ""
        $el.find("button")[0].click()
        expect(spy).toNotHaveBeenCalled()
    })

})