import firebase from 'firebase';
//import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyClcAF_GU8ypA9LGr7QAFhIebdhmWYOAiw",
    authDomain: "todo-app-7534b.firebaseapp.com",
    projectId: "todo-app-7534b",
    storageBucket: "todo-app-7534b.appspot.com",
    messagingSenderId: "437886145120",
    appId: "1:437886145120:web:dbb2122db09e1a402ca905"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  const auth=fire.auth()

  export {auth}