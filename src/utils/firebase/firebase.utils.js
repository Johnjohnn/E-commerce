import { initializeApp} from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from "firebase/auth"

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


  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);