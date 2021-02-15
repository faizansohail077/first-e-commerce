import firebase from 'firebase'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBmn_VxXhEtCya2NmvlOV3aFvUxiu7Rb6M",
    authDomain: "e-commerce-1802c.firebaseapp.com",
    projectId: "e-commerce-1802c",
    storageBucket: "e-commerce-1802c.appspot.com",
    messagingSenderId: "784066965402",
    appId: "1:784066965402:web:6da4fb7d56ba7df2ac9423",
    measurementId: "G-05SBCEPJT6"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return
    const userRef = db.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    if (!snapShot.exists) {
        const { displayName, email, uid } = userAuth;
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                uid,
                ...additionalData
            })
        }
        catch (error) {
            console.log('error creating user', error)
        }
    }
    return userRef
}

export const addCollectionAndDocument = (collectionKey, objectsToAdd) => {
    const collectionRef = db.collection(collectionKey);
    console.log(collectionRef)
}



export { auth }
export default db
