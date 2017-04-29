let React = require("react")
let Todo = require("Todo")

let TodoList= React.createClass({
    render(){
        let {todos, onToggle} = this.props
        let renderTodos = ()=>{
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