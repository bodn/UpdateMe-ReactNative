import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBnouSrGgLle-PrWUtfew20mD4-Wy2Ev7Y",
    authDomain: "updateme-de7c8.firebaseapp.com",
    databaseURL: "https://updateme-de7c8.firebaseio.com",
    projectId: "updateme-de7c8",
    storageBucket: "updateme-de7c8.appspot.com",
    messagingSenderId: "152944695531"
};
firebase.initializeApp(config);

export const database = firebase.database();