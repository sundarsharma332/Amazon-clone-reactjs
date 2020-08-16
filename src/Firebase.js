import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDWe7-95J0Fi799SOzFHyH9_OMvtEQxhtk",
    authDomain: "clone-fb7ea.firebaseapp.com",
    databaseURL: "https://clone-fb7ea.firebaseio.com",
    projectId: "clone-fb7ea",
    storageBucket: "clone-fb7ea.appspot.com",
    messagingSenderId: "373479112419",
    appId: "1:373479112419:web:9ff702f0b0295c2eea4fd6",
    measurementId: "G-VKLCX5G71F"



});
// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }