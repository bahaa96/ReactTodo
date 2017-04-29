let React = require("react")
let Todo = require("Todo")

let TodoList= React.createClass({
    render(){
        let {todos, onToggle} = this.props
        let renderTodos = ()=>{
            if (todos.length === 0){
                return <li className="flex-row"><h3> No Todos yet to show </h3></li>
            }
            return todos.map((todo)=>{
                return <Todo key={todo.id} {...todo} onToggle={onToggle}/>
            })
        }
        return (
            <ul type="none">
                {renderTodos()}
            </ul>
        )
    }
})

module.exports = TodoList