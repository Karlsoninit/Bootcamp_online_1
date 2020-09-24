import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDwf6WEtD2vM-eq_m5fJGxjJz8g9lDLGFU",
  authDomain: "teststorage-a7a5e.firebaseapp.com",
  databaseURL: "https://teststorage-a7a5e.firebaseio.com",
  projectId: "teststorage-a7a5e",
  storageBucket: "teststorage-a7a5e.appspot.com",
  messagingSenderId: "519475560851",
  appId: "1:519475560851:web:f65f61910a83e16bb66866",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
