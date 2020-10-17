import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';
import 'firebase/firebase-functions'
import 'firebase/firebase-storage'

const config = {
    apiKey: "AIzaSyC4fM7ygPaVHBz66af4Rhn_DDokMP9BwbQ",
    authDomain: "proyectos-tec-113ca.firebaseapp.com",
    databaseURL: "https://proyectos-tec-113ca.firebaseio.com",
    projectId: "proyectos-tec-113ca",
    storageBucket: "proyectos-tec-113ca.appspot.com",
    messagingSenderId: "472596902976",
    appId: "1:472596902976:web:f6ccd6ef9c1e2e592d5ba5",
    measurementId: "G-XRQ8MK22K3"
};
const firebaseApp = firebase.initializeApp(config);

!firebase.apps.length ? firebaseApp : '';

export const auth = firebase.auth();
export const functions = firebase.functions();
export const storage = firebase.storage();
export default firebaseApp.firestore()