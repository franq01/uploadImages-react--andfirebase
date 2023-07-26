// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage, ref, uploadBytes} from 'firebase/storage'
/** se dintalo la dependecia con el comando "npm i uuid
 * y este sirve para crear id unicos. para que cada imagen tenga un id unico" */
import {v4} from 'uuid'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH7qRguBkqCcoAR1LOFooeD1HRrP9GVhQ",
  authDomain: "upload-image-8194a.firebaseapp.com",
  projectId: "upload-image-8194a",
  storageBucket: "upload-image-8194a.appspot.com",
  messagingSenderId: "368903639051",
  appId: "1:368903639051:web:2ffff55b961d7a154e770e",
  measurementId: "G-FMVK5CJRMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export async function UploadFile (file) {
 const  storageRef = ref(storage, v4())
 return await uploadBytes(storageRef, file)
}