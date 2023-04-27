import { getStorage } from "@firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBkV6CU_6m_YTY1tRYIfm2Ne6fHwUWArfo",
    authDomain: "project-gallery-bbc79.firebaseapp.com",
    projectId: "project-gallery-bbc79",
    storageBucket: "project-gallery-bbc79.appspot.com",
    messagingSenderId: "66539322361",
    appId: "1:66539322361:web:6298cfb186f4825b6adb28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };