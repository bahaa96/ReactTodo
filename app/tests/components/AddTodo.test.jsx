let React = require("react")
let TestUtils = require("react-addons-test-utils")
let expect = require("expect")
let ReactDOM = require("react-dom")

let AddTodo = require("AddTodo")

describe("AddTodo", ()=>{
    it("Should exists", ()=>{
        expect(AddTodo).toExist()
    })
    it("Should call handleNewTodo", ()=>{
        let spy = expect.createSpy()
        let addTodo = TestUtils.renderIntoDocument(<AddTodo onNewTodo={spy}/>)
        let $el = $(ReactDOM.findDOMNode(addTodo))
        addTodo.refs.text.value = "Hello"
        $el.find("button")[0].click()
        expect(spy).toHaveBeenCalledWith("Hello")
    })
    it("Should not call handleNewTodo", ()=>{
        let spy = expect.createSpy()
        let addTodo = TestUtils.renderIntoDocument(<AddTodo onNewTodo={spy}/>)
        let $el = $(ReactDOM.findDOMNode(addTodo))
        addTodo.refs.text.value = ""
        $el.find("button")[0].click()
        expect(spy).toNotHaveBeenCalled()
    })

})