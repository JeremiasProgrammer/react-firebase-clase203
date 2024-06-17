import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDVB2NuYF_TgqVPgNOxfzJf9MTIjFRJQ3Y",
    authDomain: "react-fb-clase203.firebaseapp.com",
    projectId: "react-fb-clase203",
    storageBucket: "react-fb-clase203.appspot.com",
    messagingSenderId: "113191507004",
    appId: "1:113191507004:web:b6858ace2d5d4aa59e5f39",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
