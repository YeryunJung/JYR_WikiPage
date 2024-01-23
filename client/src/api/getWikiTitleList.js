import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export const getWikiTitleList = async (thisTitle) => {
  const wikiCollectionRef = collection(db, "wikies");
  try {
    const data = await getDocs(wikiCollectionRef);
    const titleList = data.docs
      .map((doc) => encodeURIComponent(doc.data().title))
      .filter((title) => title !== encodeURIComponent(thisTitle));
    return titleList;
  } catch (error) {
    console.error(error);
    throw error;
  }
};