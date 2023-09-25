import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBBFWTl3XegZWOZCOu4YLYmpZkWbbZioHw",
    authDomain: "netflix-clone-e5b29.firebaseapp.com",
    projectId: "netflix-clone-e5b29",
    storageBucket: "netflix-clone-e5b29.appspot.com",
    messagingSenderId: "588404869926",
    appId: "1:588404869926:web:53e0713d5d5b3e0e398fe7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth }
  export default db;