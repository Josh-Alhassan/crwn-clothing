import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  signInWithPopup(auth, googleProvider);
}
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

// FireStore
export const db = getFirestore();
export const createUserDocumentFromAuth = async(userAuth, additionalInformation = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  
  // Creating user Document
  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
  
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch(error) {
      console.log("Error creating the user", error.message);
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}