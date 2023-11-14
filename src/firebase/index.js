import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    sendEmailVerification 
} from "firebase/auth";
import { 
    getFirestore, 
    collection, 
    addDoc 
} from "firebase/firestore";
import { myHistory } from "../utils/history";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

let firebaseInstance
let auth
let db


firebaseInstance ??= initializeApp(firebaseConfig)
db ??= getFirestore(firebaseInstance);
auth ??= getAuth(firebaseInstance)

export const signUp = async (firstName, lastName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
        // Signed up 

        try {
            const docRef = await addDoc(collection(db, "users"), {
              firstName,
              lastName,
              email
            });
            console.log("Document written with ID: ", docRef.id);

            sendEmailVerification(auth.currentUser).then( ()=> {
                myHistory.replace('/verification')
            }
            ).catch(e=> console.log(e))

          } catch (e) {
            console.error("Error adding document: ", e);
          }
        // ...
    })
    .catch((error) => {
        console.log(error)
    });
}