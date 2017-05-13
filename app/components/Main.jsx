import React from "react"
import {connect} from "react-redux"

import TodoList from "TodoList"
import AddTodo from "AddTodo"
import SearchForm from "SearchForm"
import * as actions from "actions"





export let Main = React.createClass({
    render(){
        return (
            <div className="container text-center">
                <div className="logout">
                    <a href="#" onClick={(e)=>{
                        e.preventDefault()
                        this.props.dispatch(actions.startLogout())
                    }}>Logout</a>
                </div>
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



export default connect()(Main)