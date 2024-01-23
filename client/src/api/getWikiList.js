import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";

function timeToString(timestamp) {
  const date = timestamp.toDate();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export const getWikiList = async () => {
  const wikiCollectionRef = collection(db, "wikies");
  try {
    const data = await getDocs(wikiCollectionRef);
    // createdAt 기준 최신 순으로 정렬
    const sortedByTimeData = data.docs.sort(
      (a, b) => b.data().createdAt - a.data().createdAt
    );
    return sortedByTimeData.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      createdAt: timeToString(doc.data().createdAt),
    }));
  } catch (error) {
    console.error(error);
    throw error;
  }
};
