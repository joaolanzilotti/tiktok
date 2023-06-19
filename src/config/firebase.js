
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

const firebaseConfig = {
    apiKey: "AIzaSyAysIG0dTqdn8agv5NV8Z0YXzei3fN_V7Q",
    authDomain: "tiktok---jp.firebaseapp.com",
    projectId: "tiktok---jp",
    storageBucket: "tiktok---jp.appspot.com",
    messagingSenderId: "636732473921",
    appId: "1:636732473921:web:5db2b5a083157edfb77cc0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;