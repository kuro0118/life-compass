import firebase from "firebase";
import "firebase/auth";
import "firebase/storage";

const config = {
    apiKey: "AIzaSyCkVhf-MQvCJ_Ft-kkZW7XyAZMCdxpyKn4",
    authDomain: "life-compass-6e7aa.firebaseapp.com",
    databaseURL: "https://life-compass-6e7aa-default-rtdb.firebaseio.com",
    projectId: "life-compass-6e7aa",
    storageBucket: "life-compass-6e7aa.appspot.com",
    messagingSenderId: "430795642990",
    appId: "1:430795642990:web:dc909c4e2281f115baee7f",
    measurementId: "G-TNQ6ZBN14R"
};

const firebaseApp = firebase.initializeApp(config)

export const auth = firebase.auth();
export const storage =  firebase.storage();
export const firestore = firebaseApp.firestore()
