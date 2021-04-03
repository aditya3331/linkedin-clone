import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDhT_NL5i_6A_AOZwTLwxl0HyrFgLr7sZQ",
    authDomain: "linkedin-clone-7bb16.firebaseapp.com",
    projectId: "linkedin-clone-7bb16",
    storageBucket: "linkedin-clone-7bb16.appspot.com",
    messagingSenderId: "1077481265420",
    appId: "1:1077481265420:web:6c0dfcffe4c2ada0849129",
    measurementId: "G-PYS4NVZSGZ"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};
