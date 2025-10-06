// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6xXm6wsJ2dU9Jc1g_dNYFeJ5roZBF-Lk",
    authDomain: "educontact-22f5a.firebaseapp.com",
    projectId: "educontact-22f5a",
    storageBucket: "educontact-22f5a.firebasestorage.app",
    messagingSenderId: "224473496785",
    appId: "1:224473496785:web:759cfdafa3d9a65f5299f0",
    measurementId: "G-EPPJXGCPH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app