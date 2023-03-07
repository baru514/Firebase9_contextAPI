import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBhNqxS7llXF9IbAY_lh5K3-0-xHjtzz18",
  authDomain: "fir-9-readinglist.firebaseapp.com",
  projectId: "fir-9-readinglist",
  storageBucket: "fir-9-readinglist.appspot.com",
  messagingSenderId: "665824246316",
  appId: "1:665824246316:web:1bce3eca9e18a276c6af89",
  measurementId: "G-P4KQVRSWYN"
};

// init firebase
initializeApp(firebaseConfig);

//firestore
const db = getFirestore();

//auth
const auth = getAuth();

export { db, auth };

