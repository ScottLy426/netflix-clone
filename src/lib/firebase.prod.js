import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyAMpsvJB-E99zuSdHKNduVsUu29rbzbfMw",
  authDomain: "netflix-clone-fdca1.firebaseapp.com",
  projectId: "netflix-clone-fdca1",
  storageBucket: "netflix-clone-fdca1.appspot.com",
  messagingSenderId: "888449951702",
  appId: "1:888449951702:web:e927417dd95db83edce677",
  measurementId: "G-84PRSDE6VT"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
