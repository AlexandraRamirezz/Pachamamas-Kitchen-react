import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyBAo456GYZ7AcM1eTZm8wqQX0Fipv-QQ0k",
  authDomain: "pachamamas-kitchen.firebaseapp.com",
  projectId: "pachamamas-kitchen",
  storageBucket: "pachamamas-kitchen.appspot.com",
  messagingSenderId: "458744768164",
  appId: "1:458744768164:web:d45c4beb438b6b0fe4e831",
  measurementId: "G-PVXE7XMMEN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)