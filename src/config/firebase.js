// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';
// Tod o Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQHdwZedDiCNEtVamMADvrtylm7CFyz5A",
  authDomain: "restaurantes-app-d7182.firebaseapp.com",
  projectId: "restaurantes-app-d7182",
  storageBucket: "restaurantes-app-d7182.appspot.com",
  messagingSenderId: "482075802276",
  appId: "1:482075802276:web:ad328ff613a7a7ff6ac431"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const FirebaseFirestore = getFirestore(app);

export{
    FirebaseFirestore,
}