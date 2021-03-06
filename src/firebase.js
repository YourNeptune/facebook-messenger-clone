import firebase from "firebase";
import { firebaseConfig } from "./config";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
