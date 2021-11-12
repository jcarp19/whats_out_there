import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4c6gwdWCH6lLF06W8IOMw6mpYUhit1kw",
  authDomain: "what-s-out-there.firebaseapp.com",
  databaseURL: "https://what-s-out-there-default-rtdb.firebaseio.com",
  projectId: "what-s-out-there",
  storageBucket: "what-s-out-there.appspot.com",
  messagingSenderId: "602527368948",
  appId: "1:602527368948:web:afa1294a9cd545b07740a1",
  measurementId: "G-LM4Y9C6VMJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}

export function signOut(): void {
  auth.signOut();
}
