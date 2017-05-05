let React = require("react")
let expect = require("expect")
let TestUtils = require("react-addons-test-utils")

let {Todo} = require("Todo")

describe("Todo", ()=>{
    it("Should exists", ()=>{
        expect(Todo).toExist()
    })
    it("Should call onToggle when click the checkbox", ()=>{
        let todo ={
            id: 2,
            text: "Walk dog",
            completed: false
        }
        let spy = expect.createSpy()
        let todoComponent = TestUtils.renderIntoDocument(<Todo {...todo} dispatch={spy}/>)
        TestUtils.Simulate.click(todoComponent.refs.check)
        expect(spy).toHaveBeenCalledWith({
            type: "TOGGLE_TODO",
            id: todo.id
        })
    })
})
