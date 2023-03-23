import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC3Ntb5f8TbpF9W15OuSZ89iDnpPkTlnl0",
  authDomain: "chat-11009.firebaseapp.com",
  projectId: "chat-11009",
  storageBucket: "chat-11009.appspot.com",
  messagingSenderId: "183321786269",
  appId: "1:183321786269:web:8c96f2979ce250afff6174",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
