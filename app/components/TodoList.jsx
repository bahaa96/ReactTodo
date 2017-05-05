let React = require("react")
let {connect} = require("react-redux")

let todoApi = require("todoApi")
import Todo from "Todo"

export let TodoList = React.createClass({
    render(){
        let {todos, showCompleted, searchText} = this.props
        let renderTodos = ()=>{
            if (todos.length === 0){
                return <li className="flex-row"><h3> No Todos yet to show </h3></li>
            }
            return todoApi.filterTodos(todos, showCompleted, searchText).map((todo)=>{
                return <Todo key={todo.id} {...todo}/>
            })
        }
        return (
            <ul type="none">
                {renderTodos()}
            </ul>
        )
    }
})

export default connect(
    state => state
)(TodoList)