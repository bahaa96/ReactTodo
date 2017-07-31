import moment from "moment"
import firebase, {firebaseRef, githubProvider} from "app/firebase/"

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
        let uid = getState().auth.uid
        return firebaseRef.child(`users/${uid}/todos`).push(todo).then(snapshot =>{
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
        let uid = getState().auth.uid
        let updates = {
            completed,
            completedAt: completed === true ? moment().unix(): null
        }
        return firebaseRef.child(`users/${uid}/todos/${id}`).update(updates).then(()=>{
            dispatch(updateTodo(id, updates))
        })
    }
}

export let startAddTodos = ()=>{
    return (dispatch, getState) =>{
        let uid = getState().auth.uid
        firebaseRef.child(`users/${uid}/todos`).once("value").then(snapshot =>{
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

export let startLogin = ()=>{
    return (dispatch, getState) =>{
        return firebase.auth().signInWithPopup(githubProvider).then((res)=>{
            console.log(res)
        }).catch(e=>console.log)
    }
}
export let startLogout = ()=>{
    return (dispatch, getState) =>{
        return firebase.auth().signOut().then(()=>{
            console.log("Logged out ")
        })
    }
}

export let login = (user)=>{
    return {
        type: "LOGIN",
        user
    }
}

export let logout = ()=>{
    return {
        type: "LOGOUT"
    }
}

