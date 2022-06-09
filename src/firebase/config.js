import firebase  from "firebase";
import 'firebase/auth';
import "firebase/firebase"
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDMALAU09uQT1a4sq8T4_YMgvipUfUkGYc",
    authDomain: "fir-f68bb.firebaseapp.com",
    projectId: "fir-f68bb",
    storageBucket: "fir-f68bb.appspot.com",
    messagingSenderId: "360027831488",
    appId: "1:360027831488:web:ea67b17166413a23b48125",
    measurementId: "G-N21FZJ0286"
  };

  export default firebase.initializeApp(firebaseConfig)