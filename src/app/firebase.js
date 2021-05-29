import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyChBAGSFGcGVjQ13hIBqj-mvfKV-e8sIBA",
    authDomain: "chat-hut1.firebaseapp.com",
    projectId: "chat-hut1",
    storageBucket: "chat-hut1.appspot.com",
    messagingSenderId: "456112250612",
    appId: "1:456112250612:web:26feb57190f2bb70d48a1",
    measurementId: "G-JRS35WY5S2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;