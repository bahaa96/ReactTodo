let React = require("react")
let expect = require("expect")
let TestUtils = require("react-addons-test-utils")

import {SearchForm} from "SearchForm"

describe("SearchForm", ()=>{
    it("Should exists", ()=>{
        expect(SearchForm).toExist()
    })
    it("Should dispatch SET_SEARCH_TEXT when text changes", ()=>{
        let spy = expect.createSpy()
        let searchForm = TestUtils.renderIntoDocument(<SearchForm dispatch={spy}/>)
        searchForm.refs.searchText.value = "Hello"
        TestUtils.Simulate.change(searchForm.refs.searchText)
        expect(spy).toHaveBeenCalledWith({
            type: "SET_SEARCH_TEXT",
            searchText: "Hello"
        })
    })
    it("Should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked", ()=>{
        let spy = expect.createSpy()
        let searchForm = TestUtils.renderIntoDocument(<SearchForm dispatch={spy}/>)
        TestUtils.Simulate.click(searchForm.refs.showCompleted)
        expect(spy).toHaveBeenCalledWith({
            type: "TOGGLE_SHOW_COMPLETED"
        })
    })
})
