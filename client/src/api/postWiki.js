import { Timestamp } from "@firebase/firestore";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const postWiki = async (post) => {
  const wikiCollectionRef = collection(db, "wikies");

  const wikiPost = {
    ...post,
    createdAt: Timestamp.fromDate(new Date()),
  };

  try {
    await setDoc(doc(wikiCollectionRef, wikiPost.title), wikiPost);
  } catch (error) {
    console.error(error);
  }
};
