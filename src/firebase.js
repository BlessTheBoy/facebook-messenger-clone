import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCgAV0DdYMbS01Czhb4ztmoIjn45uQCN8U",
    authDomain: "facebook-messenger-clone-7efc7.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-7efc7.firebaseio.com",
    projectId: "facebook-messenger-clone-7efc7",
    storageBucket: "facebook-messenger-clone-7efc7.appspot.com",
    messagingSenderId: "285967081667",
    appId: "1:285967081667:web:d9b6628ee59361de6dc276",
    measurementId: "G-5TFYPLL0BL"
})

const db = firebaseApp.firestore()

export default db