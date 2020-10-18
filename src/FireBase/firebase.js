
  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    //For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyB3YwxiMH-_6LfXXwwS8y0dJaO7rzDhVAQ",
    authDomain: "todo-app-45593.firebaseapp.com",
    databaseURL: "https://todo-app-45593.firebaseio.com",
    projectId: "todo-app-45593",
    storageBucket: "todo-app-45593.appspot.com",
    messagingSenderId: "743664362916",
    appId: "1:743664362916:web:acc8adb964f8348915cd31",
    measurementId: "G-YD5M9NVV60"

  });

  const db = firebase.firestore();

  export default db;