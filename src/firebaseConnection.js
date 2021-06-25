import firebase from "firebase/app";
import "firebase/database";

let firebaseConfig = {
    apiKey: "AIzaSyCrJLm89EuJ3yARax1YcX_Y0eBs9OKtPw0",
    authDomain: "sistemacad-a5dc2.firebaseapp.com",
    projectId: "sistemacad-a5dc2",
    storageBucket: "sistemacad-a5dc2.appspot.com",
    messagingSenderId: "286369803250",
    appId: "1:286369803250:web:115e734abf2dd55cb9996b",
    measurementId: "G-H7TXSWM4EP"
};
// Initialize Firebase
if(!firebase.apps.length){
    // Abrir minha conexão
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
