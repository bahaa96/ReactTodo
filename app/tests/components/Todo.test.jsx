let React = require("react")
let expect = require("expect")
let TestUtils = require("react-addons-test-utils")

let {Todo} = require("Todo")

describe("Todo", ()=>{
    it("Should exists", ()=>{
        expect(Todo).toExist()
    })
})
