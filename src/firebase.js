import firebase from 'firebase';
  
const firebaseConfig = {
  apiKey: "AIzaSyDf2dqASBusQ1NijBvVIYp-xtlbfjaTSu8",
  authDomain: "bt3103-48789.firebaseapp.com",
  databaseURL: "https://bt3103-48789.firebaseio.com",
  projectId: "bt3103-48789",
  storageBucket: "bt3103-48789.appspot.com",
  messagingSenderId: "1043982788079",
  appId: "1:1043982788079:web:484312a8e6cf7ef24d421a",
  measurementId: "G-32BW6MM42H"
};
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;