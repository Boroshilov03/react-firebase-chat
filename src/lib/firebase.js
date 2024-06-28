import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-5d92a.firebaseapp.com",
  projectId: "reactchat-5d92a",
  storageBucket: "reactchat-5d92a.appspot.com",
  messagingSenderId: "463223292812",
  appId: "1:463223292812:web:2b534084a5a64345c78ca9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth() //login/register
export const db = getFirestore() //user info
export const storage = getStorage() //upload images

