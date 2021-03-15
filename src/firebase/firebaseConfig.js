import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.appspot.com`,

  messagingSenderId: "1071758967789",
  appId: "1:1071758967789:web:66e611e0504fe2f9cf5de4",

  // messagingSenderId: "992643175883",
  // appId: "1:992643175883:web:e6d6066105074c8ff1524e",
};

function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}
initFirebase();
const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {db, firebase, googleAuthProvider};
