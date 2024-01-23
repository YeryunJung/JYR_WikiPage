import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const updateWikiDetail = async (id, newWiki) => {
  if (!id) {
    console.error("수정하려는 위키의 ID가 없습니다");
    return;
  }
  const wikiCollectionRef = collection(db, "wikies");

  try {
    await setDoc(doc(wikiCollectionRef, id), newWiki);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
