// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: "AIzaSyCbE6x-BlS2wuXT--dchCcZ23-0khiZyJ4",
  //   authDomain: "job-world-a014d.firebaseapp.com",
  //   projectId: "job-world-a014d",
  //   storageBucket: "job-world-a014d.appspot.com",
  //   messagingSenderId: "94390531479",
  //   appId: "1:94390531479:web:6ba55614e5807233f180d2",

  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
