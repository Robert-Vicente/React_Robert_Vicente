import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJikTU3clvQa5GQSC9pwj4g-_4OJ1O1gk",
  authDomain: "e-commerce-robert-vicente.firebaseapp.com",
  projectId: "e-commerce-robert-vicente",
  storageBucket: "e-commerce-robert-vicente.appspot.com",
  messagingSenderId: "648937502494",
  appId: "1:648937502494:web:f77ad7f3e6f402583c7b0f",
  measurementId: "G-EG3QBL1MCJ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
