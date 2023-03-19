import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCxWVtS2YZU-qakVaew1CXJedljYENXFIs",
  authDomain: "chat-app-project-87842.firebaseapp.com",
  projectId: "chat-app-project-87842",
  storageBucket: "chat-app-project-87842.appspot.com",
  messagingSenderId: "76113851464",
  appId: "1:76113851464:web:77626569346ac7a312d47d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
