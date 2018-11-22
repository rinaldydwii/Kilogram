import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCG_fyFyI8_1dCw4S4dK_RiZw7mo_KTgmo",
    authDomain: "kilogram-86633.firebaseapp.com",
    databaseURL: "https://kilogram-86633.firebaseio.com",
    projectId: "kilogram-86633",
    storageBucket: "",
    messagingSenderId: "818640427446"
};
firebase.initializeApp(config);

export const f = firebase
export const database = firebase.database()
export const auth = firebase.auth()
export const storage = firebase.storage()