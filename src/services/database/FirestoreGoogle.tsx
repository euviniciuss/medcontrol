import { FirebaseApp } from "../config/FirebaseApp";
import { getFirestore } from "firebase/firestore";

export const CloudStore = getFirestore(FirebaseApp)