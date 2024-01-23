import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export const getWikiDetail = async (title) => {
  const wikiCollectionRef = collection(db, "wikies");
  const q = query(wikiCollectionRef, where("title", "==", title));

  try {
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return { id: doc.id, ...doc.data() };
    } else {
      console.log("찾은 데이터 없음");
      return null;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
