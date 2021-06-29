import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';
import '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDkyZFKPvsbEU55qfYGboi-i-2awQZLRf8',
  databaseURL: 'https://sistemacad-988b5.firebaseio.com',
  authDomain: 'sistemacad-988b5.firebaseapp.com',
  projectId: 'sistemacad-988b5',
  storageBucket: 'sistemacad-988b5.appspot.com',
  messagingSenderId: '509864665764',
  appId: '1:509864665764:web:86a153dd2925f92115bc31',
};

// Initialize Firebase
if (!firebase.apps.length) {
  // Abrir minha conexão
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
