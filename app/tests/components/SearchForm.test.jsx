let React = require("react")
let expect = require("expect")
let TestUtils = require("react-addons-test-utils")

let SearchForm = require("SearchForm")

describe("SearchForm", ()=>{
    it("Should exists", ()=>{
        expect(SearchForm).toExist()
    })
    it("Should call on onSearch when passing a valid input", ()=>{
        let spy = expect.createSpy()
        let searchForm = TestUtils.renderIntoDocument(<SearchForm onSearch={spy}/>)
        searchForm.refs.searchText.value = "Hello"
        TestUtils.Simulate.change(searchForm.refs.searchText)
        expect(spy).toHaveBeenCalledWith("Hello", false)
    })
    // it("Should not call on onSearch when passing a invalid input", ()=>{
    //     let spy = expect.createSpy()
    //     let searchForm = TestUtils.renderIntoDocument(<SearchForm onSearch={spy}/>)
    //     searchForm.refs.searchText.value = ""
    //     TestUtils.Simulate.change(searchForm.refs.searchText)
    //     expect(spy).toNotHaveBeenCalled()
    // })
})
