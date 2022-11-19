import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfH5h9WtnYaiO8pdh-xid4HmaNGro34dQ",
  authDomain: "dondeesta-cde0e.firebaseapp.com",
  databaseURL: "https://dondeesta-cde0e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dondeesta-cde0e",
  storageBucket: "dondeesta-cde0e.appspot.com",
  messagingSenderId: "521717502848",
  appId: "1:521717502848:web:7036f33d20eb30ded7a765"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;