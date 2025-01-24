// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child, set } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "tu-api-key",
  authDomain: "tu-auth-domain",
  databaseURL: "https://proyectop8-7cd70-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "tu-project-id",
  storageBucket: "tu-storage-bucket",
  messagingSenderId: "tu-messaging-sender-id",
  appId: "tu-app-id",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Fetch data from Firebase Realtime Database
export const getPostData = async () => {
  const dbRef = ref(db);
  try {
    const snapshot = await get(child(dbRef, 'posts/'));
    if (snapshot.exists()) {
      return snapshot.val(); // Return data from "posts"
    } else {
      console.log("No hay datos disponibles");
      return null;
    }
  } catch (error) {
    console.error("Error al leer los datos de la base de datos:", error);
  }
};

// Write data to Firebase
export const setPostData = async (postId, postData) => {
  const postRef = ref(db, 'posts/' + postId);
  try {
    await set(postRef, postData);
  } catch (error) {
    console.error("Error al escribir los datos:", error);
  }
};
export { ref, get, child, db };