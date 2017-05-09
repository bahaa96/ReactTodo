let $ = require("jquery")

module.exports = {
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