import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseApp = initializeApp({
    apiKey: "AIzaSyD-NQ83t4c9wyHx2mTRaVJWHTxxxGblOnA",
    authDomain: "invoice-app-90dbd.firebaseapp.com",
    projectId: "invoice-app-90dbd",
    storageBucket: "invoice-app-90dbd.appspot.com",
    messagingSenderId: "41498411767",
    appId: "1:41498411767:web:71595e02971267a84949f2"
});

const db = getFirestore(firebaseApp);

export default { db, collection, addDoc }