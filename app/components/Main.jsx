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
                <div className="row justify-content-center">
                    <div className="col-10 col-sm-8 col-md-6 header">
                        <h2 className="heading">{ this.props.currentUser.displayName + "'s todos" }</h2>
                        <button onClick={(e)=>{
                            e.preventDefault()
                            this.props.dispatch(actions.startLogout())
                        }} className="logout">Logout</button>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-10 col-sm-8 col-md-6 main-div">
                        <SearchForm/>
                        <TodoList/>
                        <AddTodo/>
                    </div>
                </div>
            </div>
        )
    }
})



export default connect(
    state => {
        return {
            currentUser: state.auth
        }
    }
)(Main)