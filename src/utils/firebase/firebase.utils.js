import { initializeApp} from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword} from "firebase/auth"
import {getFirestore, doc, getDoc, setDoc,} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfr41g2wX4Abux3EPR9qstMv_RveGkCao",
    authDomain: "crown-store-179f0.firebaseapp.com",
    projectId: "crown-store-179f0",
    storageBucket: "crown-store-179f0.appspot.com",
    messagingSenderId: "1090778437593",
    appId: "1:1090778437593:web:09b9bf2e7c518f72a26bc8"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  
  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const singInWithGoogleRedirect = ()=> signInWithRedirect(auth, googleProvider)
  export const db = getFirestore();
 
  export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db, "users", userAuth.uid);
    console.log(userDocRef);
    

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists())
    if(!userSnapshot.exists()) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      
      try {
        await setDoc (userDocRef, {
          displayName,
          email, 
          createdAt
        })
      } catch(error) {
        console.log("error creating the user")
      }
    }
    return userDocRef;
    // if data doesn't exist 

    // check if data exists 

    // return userDocRef
  }
  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await createUserDocumentFromAuth(auth, email, password)
  }

