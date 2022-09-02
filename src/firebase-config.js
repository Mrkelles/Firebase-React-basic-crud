import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCGwkmLi5DXUr1pNNFdYrLA64Cj28mU7fI",
    authDomain: "crud-c8c9a.firebaseapp.com",
    projectId: "crud-c8c9a",
    storageBucket: "crud-c8c9a.appspot.com",
    messagingSenderId: "1090999151364",
    appId: "1:1090999151364:web:7b919e1c29960d3b8abe51"
};
  
const app = initializeApp(firebaseConfig);

export const db = getFirestore();