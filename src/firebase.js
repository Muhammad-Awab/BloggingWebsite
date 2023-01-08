import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3rLUo9uoZXgPdxzCBii6e0t38feEargA",
  authDomain: "blog-website-bb607.firebaseapp.com",
  projectId: "blog-website-bb607",
  storageBucket: "blog-website-bb607.appspot.com",
  messagingSenderId: "671370240358",
  appId: "1:671370240358:web:9e775d8d586664d104a8a7",
  measurementId: "G-L3YCN77FB3"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
