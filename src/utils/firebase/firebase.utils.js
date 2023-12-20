import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7FHUptqEPv3fQRUCOLMcSV5C2PcYrX2M",
  authDomain: "crwn-clothing-db-9cede.firebaseapp.com",
  projectId: "crwn-clothing-db-9cede",
  storageBucket: "crwn-clothing-db-9cede.appspot.com",
  messagingSenderId: "589094582868",
  appId: "1:589094582868:web:2a9fffc98e2fa2b8818bc1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const {displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userDocRef;
}