import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfXNQLqMliyi2EtHWyCbSLxHR68cOvnZ4",
  authDomain: "loginroutes.firebaseapp.com",
  projectId: "loginroutes",
  storageBucket: "loginroutes.appspot.com",
  messagingSenderId: "588562691283",
  appId: "1:588562691283:web:6eb3f1641340f34411d026"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
