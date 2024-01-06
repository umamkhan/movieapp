
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCyCn0BUJPcblGJK92COOWw0jgf3WCPM8A",
  authDomain: "netflix-project-b3888.firebaseapp.com",
  projectId: "netflix-project-b3888",
  storageBucket: "netflix-project-b3888.appspot.com",
  messagingSenderId: "55290280826",
  appId: "1:55290280826:web:1240045da569223855b4c3",
  measurementId: "G-X433DTV08R"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
