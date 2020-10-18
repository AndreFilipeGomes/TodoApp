
  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
   //You need to paste here the configurations that firebase gives you when you create the DataBase 
  });

  const db = firebase.firestore();

  export default db;
