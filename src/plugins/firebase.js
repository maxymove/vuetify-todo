import firebase from 'firebase/app';
import 'firebase/auth';

require('dotenv').config();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VUE_APP_apikey,
  authDomain: process.env.VUE_APP_authDomain,
  projectId: process.env.VUE_APP_projectId,
  storageBucket: process.env.VUE_APP_storageBucket,
  messagingSenderId: process.env.VUE_APP_messagingSenderId,
  appId: process.env.VUE_APP_appId,
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
