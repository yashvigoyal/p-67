import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDOQqKuUAqbJkjL4NpydvPKsd4oN08es8M",
    authDomain: "voter-app-265c3.firebaseapp.com",
    databaseURL: "https://voter-app-265c3-default-rtdb.firebaseio.com",
    projectId: "voter-app-265c3",
    storageBucket: "voter-app-265c3.appspot.com",
    messagingSenderId: "292624303129",
    appId: "1:292624303129:web:0d1626e6d7642761059688"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();