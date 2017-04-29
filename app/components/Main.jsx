let React = require("react")
let todoApi = require("todoApi")
let moment = require("moment")
let uuid = require("node-uuid")

let TodoList = require("TodoList")
let SearchForm = require("SearchForm")
let AddTodo = require("AddTodo")

let Main = React.createClass({
    getInitialState(){
        return {
            showCompleted: false,
            searchTest: "",
            todos: todoApi.getTodos()
        }
    },
    componentDidUpdate(){
        todoApi.setTodos(this.state.todos)
    },
    handleNewTodo(text){
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text,
                    completed: false,
                    createdAt: moment().unix() ,
                    completedAt: undefined
                }
            ]
        })
    },
    handleSearch(searchText, showCompleted){
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText,
        })
    },
    handleToggle(id){
        let todos = this.state.todos.map((todo)=>{
            if (todo.id === id){
                todo.completed = !todo.completed
                todo.completedAt = todo.completed ? moment().unix() : undefined
            }
            return todo
        })

        this.setState({
            todos: todos
        })
    },
    render(){
        let {todos, showCompleted, searchText} = this.state
        let filteredTodos = todoApi.filterTodos(todos, showCompleted, searchText)

        return (
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <h2 className="heading">Todo App</h2>
                        <SearchForm onSearch={this.handleSearch}/>
                            <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                        <AddTodo onNewTodo={this.handleNewTodo}/>
                    </div>
                </div>
            </div>
      )
    }
})



module.exports = Main