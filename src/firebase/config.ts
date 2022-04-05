import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDpNorUBtznYeOKK1DUcoaKloWQnw-jjvI",
  authDomain: "sql-demos-53d3b.firebaseapp.com",
  projectId: "sql-demos-53d3b",
  storageBucket: "sql-demos-53d3b.appspot.com",
  messagingSenderId: "908085837467",
  appId: "1:908085837467:web:1ad606154034e231cb103e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();