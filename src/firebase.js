// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsJNRL8XzPYZW2EsbhXkQVvfjCq6Tfoaw",
  authDomain: "react-fb-auth-b4371.firebaseapp.com",
  projectId: "react-fb-auth-b4371",
  storageBucket: "react-fb-auth-b4371.appspot.com",
  messagingSenderId: "1061637684426",
  appId: "1:1061637684426:web:c2e99d6d660366c6a34833"
};

// Initialize Firebase
export default const app = initializeApp(firebaseConfig);
export default const aut = getAuth(app)