import MOCK_DATA from '../data/MOCK_DATA.json' assert {type: "json"}
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf2PrVYTNpC_QoGwv8FnTsbzD9VkSDNa8",
  authDomain: "rj-51155.firebaseapp.com",
  projectId: "rj-51155",
  storageBucket: "rj-51155.appspot.com",
  messagingSenderId: "909764531800",
  appId: "1:909764531800:web:6a9a4602d2947085041c2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const productosRef = collection(db, 'productos')

MOCK_DATA.forEach((item) => {
    delete item.id

    addDoc(productosRef, item)
})