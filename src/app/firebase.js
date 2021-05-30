import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAnOiKfm6LchPoAbCLqRl8HZJK-w6GC-5c",
  authDomain: "chat-hub-29cd9.firebaseapp.com",
  projectId: "chat-hub-29cd9",
  storageBucket: "chat-hub-29cd9.appspot.com",
  messagingSenderId: "654516128437",
  appId: "1:654516128437:web:3b74d0a66609a86c9b0cfc"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
