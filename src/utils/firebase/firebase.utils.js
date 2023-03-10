import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAF8iKdziWpd1OAVdZznWEoUj4ZsqqJFxg",
  authDomain: "crwn-clothing-db-2ab7a.firebaseapp.com",
  projectId: "crwn-clothing-db-2ab7a",
  storageBucket: "crwn-clothing-db-2ab7a.appspot.com",
  messagingSenderId: "727855420720",
  appId: "1:727855420720:web:5f9a89cbc7358b552ea4f5"

};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  signInWithPopup(auth, provider);
}

// FireStore
export const db = getFirestore();
export const createUserDocumentFromAuth = async(userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
}