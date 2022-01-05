import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkva3usXNI3N7cyKd_ufBxQh3JSnbI6xI",
  authDomain: "mymoney-c51f2.firebaseapp.com",
  projectId: "mymoney-c51f2",
  storageBucket: "mymoney-c51f2.appspot.com",
  messagingSenderId: "731907972798",
  appId: "1:731907972798:web:d52c1eba9b4bc076d248ef",
};

// init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamps
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
