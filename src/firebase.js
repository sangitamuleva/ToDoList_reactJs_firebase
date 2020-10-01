import firebase from "firebase"


  const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCyczfhoWkyXofeb-VTGJ2JRzSerOnfdMo",
    authDomain: "to-do-list-af659.firebaseapp.com",
    databaseURL: "https://to-do-list-af659.firebaseio.com",
    projectId: "to-do-list-af659",
    storageBucket: "to-do-list-af659.appspot.com",
    messagingSenderId: "101750354108",
    appId: "1:101750354108:web:99c6e5bc896f19dcec20b9",
    measurementId: "G-F5WCJ1DLZW"
  });

  const db= firebase.firestore();
//   const auth=firebase.auth();
//   const storage=firebase.storage();

  export default db;