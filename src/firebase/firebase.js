import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

//this config is being used for both development and production environment. Though, it is a best practice creating a second project and have two configs: one for production (prodConfig) and another for development (devConfig), so you choose the config based on the environment.

const config = {
  apiKey: "AIzaSyC9fdBoMoZeFb8jqKdiHjm4iyLCpzllL6g",
  authDomain: "dpow-4c98e.firebaseapp.com",
  databaseURL: "https://dpow-4c98e-default-rtdb.firebaseio.com",
  projectId: "dpow-4c98e",
  storageBucket: "dpow-4c98e.appspot.com",
  messagingSenderId: "985255365057",
  appId: "1:985255365057:web:8af2560ad58d2ce29a8740",
  measurementId: "G-QX28B43LLP",
};

if (!firebase.apps.length) {
  //initializing with the config object
  firebase.initializeApp(config);
}

//separting database API and authentication
const db = firebase.database();
const auth = firebase.auth();
const storage = firebase.storage();

const facebookProvider = new firebase.auth.FacebookAuthProvider();
export { db, auth, facebookProvider, storage as default };
