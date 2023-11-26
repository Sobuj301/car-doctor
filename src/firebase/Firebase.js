// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.evnVITE_apiKey,
  authDomain:import.meta.evnVITE_authDomain,
  projectId:import.meta.evnVITE_projectId,
  storageBucket:import.meta.evnVITE_storageBucket,
  messagingSenderId:import.meta.evnVITE_messagingSenderId,
  appId:import.meta.evnVITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app; 