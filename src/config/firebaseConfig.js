
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCueKDaCm4g6gKqLG4FOzSEbrbVgLdMz8E",
  authDomain: "proyecto-react-js-8ebbf.firebaseapp.com",
  projectId: "proyecto-react-js-8ebbf",
  storageBucket: "proyecto-react-js-8ebbf.appspot.com",
  messagingSenderId: "311447978420",
  appId: "1:311447978420:web:d6b11087913172aa14f2e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);