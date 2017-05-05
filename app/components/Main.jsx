let React = require("react")

import TodoList from "TodoList"
import AddTodo from "AddTodo"
import SearchForm from "SearchForm"





let Main = React.createClass({
    render(){
        return (
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-10 col-sm-8 col-md-6">
                        <h2 className="heading">Todo App</h2>
                        <SearchForm/>
                            <TodoList/>
                        <AddTodo/>
                    </div>
                </div>
            </div>
      )
    }
})



module.exports = Main