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
    else {
        console.log(db.doc('users/adasdasd'))
    }
}



export { auth }
export default db
