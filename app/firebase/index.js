import firebase from "firebase"

// Initialize Firebase
let config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

export let githubProvider = new firebase.auth.GithubAuthProvider()
export let firebaseRef = firebase.database().ref()
export default firebase