import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export const getWikiTitleList = async (thisTitle) => {
  const wikiCollectionRef = collection(db, "wikies");
  try {
    const data = await getDocs(wikiCollectionRef);
    // thisTitle 파라미터를 전달하면 해당 제목을 제외한 글 제목을 리턴
    if (thisTitle) {
      const titleList = data.docs
        .map((doc) => doc.data().title)
        .filter((title) => title !== thisTitle);
      return titleList;
    } else {
      const titleList = data.docs.map((doc) => {
        return doc.data().title;
      });
      return titleList;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
