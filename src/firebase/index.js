import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    sendEmailVerification,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut
} from "firebase/auth";
import { 
    getFirestore,
    getDoc,
    setDoc,
    doc
} from "firebase/firestore";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

let firebaseInstance;
let db;
let provider;
export let auth;

firebaseInstance ??= initializeApp(firebaseConfig);
db ??= getFirestore(firebaseInstance);
provider ??= new GoogleAuthProvider();
auth ??= getAuth(firebaseInstance);

export const logout = async () => {
    try {
        await signOut(auth);
        return {success: true}
    }
    catch (error) {
        return {success: false, error: error.errorMessage}
    }
}

export const signUp = async (firstName, lastName, email, password) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        const response = await setUserInfo(email, {firstName, lastName});

        await sendEmailVerification(auth.currentUser)
        return { success: true, ...response }
    } catch (error) {
        return { success: false}
    }
}

export const signIn = async (email, password) => {

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user)
        if( !user.emailVerified){
            console.log('not verified')
            return {success: false, error: "verification"}
        } else {
            // console.log(user.displayName)
            const response = await getUserinfo(email);
            return {success: true, ...response}
        }
    } catch (error) {
        console.log(error.code, error.message)
        console.log('error occured')
        return {success: false, error: error.message}
    }
}

export const continueWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        // The signed-in user info.
        const user = result.user;
        const docResponse = await setUserInfo(user.email, {name: user.displayName});
        return { success: true , ...docResponse};
    } catch (error) {
        const errorMessage = error.message;
        console.log(error);
        return { success: false, error: errorMessage };
    }
};

export const logOut = async () => {
    try {
        await signOut(auth);
        return {success: true}
    }
    catch (error) {
        return {success: false, error: error.errorMessage}
    }
}

export const setUserInfo = async (email, data) => {
    // let isNewUser = true;
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        // isNewUser = false;
        console.log("Document data:", docSnap.data());
    } else {
    console.log("No such document!");
    }
    await setDoc(docRef, data, { merge: true });
    return {...docSnap.data(), ...data, email: docSnap.id};
}

export const getUserinfo = async (email) => {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return {...docSnap.data(), email: docSnap.id}
    } else {
        console.log("No such document!");
        return null
    }
}