import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyClWU76PSBZA6ynPid_YyNaw_Z5-dm-tQ8",
    authDomain: "amznclone123.firebaseapp.com",
    databaseURL: "https://amznclone123.firebaseio.com",
    projectId: "amznclone123",
    storageBucket: "amznclone123.appspot.com",
    messagingSenderId: "361432601088",
    appId: "1:361432601088:web:6c90e9e3d70f68664c7ee5",
    measurementId: "G-DWDVJ17G0Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};