import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export const getWikiList = async () => {
  const wikiCollectionRef = collection(db, "wikies");
  try {
    const data = await getDocs(wikiCollectionRef);
    return data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  } catch (error) {
    console.error(error);
    throw error;
  }
};
