import moment from "moment"
import firebase, {firebaseRef} from "app/firebase/index"

export let setSearchText = (searchText)=>{
    return {
        type: "SET_SEARCH_TEXT",
        searchText
    }
}

export let toggleShowCompleted = ()=>{
    return {
        type: "TOGGLE_SHOW_COMPLETED"
    }
}

export let addTodo = (todo)=>{
    return {
        type: "ADD_TODO",
        todo
    }
}
export let startAddTodo = (text)=>{
    return (dispatch, getState)=>{
        let todo = {
            text,
            completed: false,
            createdAt: moment().unix() ,
            completedAt: null
        }
        return firebaseRef.child("todos").push(todo).then(snapshot =>{
            dispatch(addTodo({
                ...todo,
                id: snapshot.key
            }))
        })

    }
}
export let addTodos = (todos)=>{
    return {
        type: "ADD_TODOS",
        todos
    }

}
export let updateTodo = (id, updates)=>{
    return {
        type: "UPDATE_TODO",
        id,
        updates
    }
}

export let startToggleTodo = (id , completed)=>{
    return (dispatch, getState) =>{
        let updates = {
            completed,
            completedAt: completed === true ? moment().unix(): null
        }
        return firebaseRef.child(`todos/${id}`).update(updates).then(()=>{
            dispatch(updateTodo(id, updates))
        })
    }
}

export let startAddTodos = ()=>{
    return (dispatch, getState) =>{
        firebaseRef.child("todos").once("value").then(snapshot =>{
            let todos = snapshot.val() || {}
            todos = Object.keys(todos).map(key =>{
                return {
                    ...todos[key],
                    id: key
                }
            })
            dispatch(addTodos(todos))
        }).catch(e=>console.log)
    }
}
