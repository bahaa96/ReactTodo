let $ = require("jquery")

module.exports = {
    setTodos(todos){
        if ($.isArray(todos)){
            localStorage.setItem("todos", JSON.stringify(todos))
            return todos
        }
    },
    getTodos(){
        let stringTodos = localStorage.getItem("todos")
        let todos = []
        try{
            todos = JSON.parse(stringTodos)
        }catch (e){
            throw e
        }

        if ($.isArray(todos)){
            return todos
        }else {
            return []
        }

    },
    filterTodos(todos, showCompleted, searchText){
        let filteredTodos= []

        //Filter Completed
            filteredTodos = todos.filter(todo=>{
                return !todo.completed || showCompleted
            })
        //Filter Search
            filteredTodos = filteredTodos.filter(todo=>{
                if (searchText){
                    searchText = searchText.toLowerCase()
                    return todo.text.toLowerCase().includes(searchText)
                }else {
                    return todo
                }
            })
        // Sort todos with uncompleted first
        filteredTodos.sort((a, b)=>{
            if (!a.completed && b.completed){
                return -1
            }else if(a.completed && !b.completed){
                return 1
            }else {
                return 0
            }
        })
        return filteredTodos
    },
}