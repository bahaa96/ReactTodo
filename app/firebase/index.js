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

export let firebaseRef = firebase.database().ref()
export default firebase