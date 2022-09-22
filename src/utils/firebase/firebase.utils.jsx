import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdLZ5U_guUP4PqtaY7hd_fA25R9qGFW3k",
  authDomain: "crwn-clothing-db-a3093.firebaseapp.com",
  projectId: "crwn-clothing-db-a3093",
  storageBucket: "crwn-clothing-db-a3093.appspot.com",
  messagingSenderId: "518940749791",
  appId: "1:518940749791:web:1b0207b71c6e4e7b4a9e6a",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const createUserDocumentFromAuth = async (userAuth, addInfo = {}) => {
  if (!userAuth) return;

  console.log(userAuth);
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...addInfo,
      });
    } catch (error) {
      console.log("Error creating a user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  console.log(email, password);
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const passSignInWithEmailAndPasswordData = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
