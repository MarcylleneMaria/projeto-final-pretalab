// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7hYuMpBO37JRHWAx5t8WBH-JvjVgBOTo",
  authDomain: "projeto-final-marcyllene-react.firebaseapp.com",
  projectId: "projeto-final-marcyllene-react",
  storageBucket: "projeto-final-marcyllene-react.appspot.com",
  messagingSenderId: "223766697861",
  appId: "1:223766697861:web:4200917388dac8ddf5d6ec",
  measurementId: "G-EQ27WLZLME",
  databaseURL: "https://projeto-final-marcyllene-react-default-rtdb.firebaseio.com/"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase ()

export { database }