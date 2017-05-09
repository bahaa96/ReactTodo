import firebase from "firebase"

// Initialize Firebase
let config = {
    apiKey: "AIzaSyBSeUgIpyWllJ5y0VZT5TtTebRx1o0DAss",
    authDomain: "react-todo-c8abb.firebaseapp.com",
    databaseURL: "https://react-todo-c8abb.firebaseio.com",
    projectId: "react-todo-c8abb",
    storageBucket: "react-todo-c8abb.appspot.com",
    messagingSenderId: "595476146663"
};
firebase.initializeApp(config);

let firebaseRef = firebase.database().ref()

firebaseRef.set({
    app: {
      name: "Todo App",
      version: "1.0.0"
    },
    isRunning: true,
    user: {
        name: "bahaa",
        age: 20
    }
}).then(res =>{
    console.log("set Worked")
}).catch(e => console.log)


let notesRef = firebaseRef.child("notes")

notesRef.on("child_added", (snapshot)=>{
    console.log("Child Added", snapshot.key, snapshot.val())
})

notesRef.on("child_changed", (snapshot)=>{
    console.log("Child Changed", snapshot.key, snapshot.val())
})
notesRef.on("child_removed", (snapshot)=>{
    console.log("Child removed", snapshot.key, snapshot.val())
})


notesRef.push().set({
    text: "Walk tha dog",
})
notesRef.push({
    text: "Clean tha Yard"
})




