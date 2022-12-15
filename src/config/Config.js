import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAoE8GpD8YMsd5NcguaiRWX1DFlo6KfDps",
    authDomain: "fir-aria-project.firebaseapp.com",
    databaseURL: "https://fir-aria-project-default-rtdb.firebaseio.com",
    projectId: "fir-aria-project",
    storageBucket: "fir-aria-project.appspot.com",
    messagingSenderId: "710038917162",
    appId: "1:710038917162:web:4d8a5d6fa619c449727353"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }