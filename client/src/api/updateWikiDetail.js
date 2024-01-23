import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";

export const updateWikiDetail = async (title, newWiki) => {
  const wikiCollectionRef = collection(db, "wikies");
  let q = query(wikiCollectionRef, where("title", "==", title));

  try {
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];

      await updateDoc(doc(db, "wikies", doc.title), newWiki);
      window.location.reload();
    } else {
      console.log("찾은 데이터 없음");
      return null;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
