import firebase from "firebase";


const config = {
    apiKey: "AIzaSyCQ_Xshwk7WwSWPzTRxt7Qpf0DtcVkr1wU",
    authDomain: "castillo-d6c01.firebaseapp.com",
    databaseURL: "https://castillo-d6c01.firebaseio.com",
    projectId: "castillo-d6c01",
    storageBucket: "castillo-d6c01.appspot.com",
    messagingSenderId: "260620724185",
    appId: "1:260620724185:web:4dc11c93052ec9f5ab9bc8"
  }

  firebase.initializeApp(config);
  
  export default firebase;


// import firebase from "firebase/app";
// import database from "firebase/database";

// const config = {
//     apiKey: "AIzaSyCQ_Xshwk7WwSWPzTRxt7Qpf0DtcVkr1wU",
//     authDomain: "castillo-d6c01.firebaseapp.com",
//     databaseURL: "https://castillo-d6c01.firebaseio.com",
//     projectId: "castillo-d6c01",
//     storageBucket: "castillo-d6c01.appspot.com",
//     messagingSenderId: "260620724185",
//     appId: "1:260620724185:web:4dc11c93052ec9f5ab9bc8"
//   }

// let firebaseCache;

// export const getFirebase = () => {
//   if (firebaseCache) {
//     return firebaseCache;
//   }

//   firebase.initializeApp(config);
//   firebaseCache = firebase;
//   return firebase;
// };
