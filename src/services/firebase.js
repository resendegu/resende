import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';
import 'firebase/functions';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/analytics';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId:process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics(app)

const auth = firebase.auth();
const providers = firebase.auth
const database = firebase.database();
const functions = firebase.functions();
const storage = firebase.storage();
let messaging
try {
  messaging = firebase.messaging();
} catch (error) {
  console.log(error);
}
const firestore = firebase.firestore();

// const { REACT_APP_VAPID_KEY } = process.env;
// const publicKey = REACT_APP_VAPID_KEY;

// const getToken = async (setTokenFound) => {
//     let currentToken = "";
  
//     try {
//       currentToken = await messaging.getToken({ vapidKey: publicKey });
//       if (currentToken) {
//         setTokenFound(true);

        
//       } else {
//         setTokenFound(false);
//       }
//     } catch (error) {
//       console.log("An error occurred while retrieving token. ", error);
//     }
  
//     return currentToken;
// };

// const onMessageListener = () =>
//     new Promise((resolve) => {
//     messaging.onMessage((payload) => {
//         resolve(payload);
//     });
// });

export {firebase, auth, database, functions, storage, providers};