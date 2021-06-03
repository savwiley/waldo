import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkjNiDhl58ZnU8FxJSeMenlm08snE9JOA",
  authDomain: "waldo-9e96c.firebaseapp.com",
  projectId: "waldo-9e96c",
  storageBucket: "waldo-9e96c.appspot.com",
  messagingSenderId: "605827275032",
  appId: "1:605827275032:web:4118ece57107b7db5c266d",
  measurementId: "G-X9XEP41LEE"
};

firebase.initializeApp(firebaseConfig);

export default firebase;