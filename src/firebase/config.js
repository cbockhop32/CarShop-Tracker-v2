import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';




// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCp67CzzgeRKc-UBsGmTS0aMu1zHkirEZE",
    authDomain: "car-project-94a83.firebaseapp.com",
    projectId: "car-project-94a83",
    storageBucket: "car-project-94a83.appspot.com",
    messagingSenderId: "609541463319",
    appId: "1:609541463319:web:3a5853fd31e6380571eb52"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const projectStorage = firebase.storage();
  const projectFireStore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export { projectStorage, projectFireStore, timestamp };
