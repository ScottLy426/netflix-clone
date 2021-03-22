import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


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

// seedDatabase(firebase);


export { firebase };
