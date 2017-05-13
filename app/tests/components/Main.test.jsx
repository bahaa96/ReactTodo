let React = require("react")
let expect = require("expect")
let TestUtils = require("react-addons-test-utils")

import Main from "Main"
import TodoList from "TodoList"
import Provider from "react-redux/src/components/Provider";
let configureStore = require("configureStore")
import {authReducer} from "reducers"


describe("Main", ()=> {
    it("Should exists", () => {
        expect(Main).toExist()
    })
    it("Should render TodoList", ()=>{
        let store = configureStore.configure()
        let mainProvider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <Main/>
            </Provider>
        )
        let main = TestUtils.scryRenderedComponentsWithType(mainProvider, Main)[0]
        let todoList = TestUtils.scryRenderedComponentsWithType(main, TodoList)

        expect(todoList.length).toBe(1)

    })
})
