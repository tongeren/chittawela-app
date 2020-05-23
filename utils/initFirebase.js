import firebase from "firebase/app";

const config = {
    apiKey: process.env.GOOGLE_FIREBASE_API_KEY,
    authDomain: process.env.GOOGLE_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.GOOGLE_FIREBASE_DATABASE_URL,
    projectId: process.env.GOOGLE_FIREBASE_PROJECT_ID,
    storageBucket: process.env.GOOGLE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.GOOGLE_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.GOOGLE_FIREBASE_APP_ID
};
  
const initFireBase = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    };
};

export default initFireBase;