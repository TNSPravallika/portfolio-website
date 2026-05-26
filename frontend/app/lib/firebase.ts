import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyALIJ0vh7Kaf2zhNcN9uDYT_0v44HJcHgo",
  authDomain: "pravallika-portfolio-617f3.firebaseapp.com",
  projectId: "pravallika-portfolio-617f3",
  storageBucket: "pravallika-portfolio-617f3.appspot.com",
  messagingSenderId: "338259302859",
  appId: "1:338259302859:web:f37a6229d9f4f207f53e4e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);