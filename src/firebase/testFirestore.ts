import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export const testWrite = async () => {
  await addDoc(collection(db, "test"), {
    hello: "firebase connected",
    createdAt: new Date()
  });
};