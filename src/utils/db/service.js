import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import app from "./init";
import api from "../api";

// const firestore = getFirestore(app);

// export async function retrieveData(collectionName, filterGroup = null) {
//     let q;
//     if (filterGroup != null) {
//         q = query(collection(firestore, collectionName), where("group", "==", filterGroup));
//     } else {
//         q = collection(firestore, collectionName);
//     }
//     const snapshot = await getDocs(q);
//     const data = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//     }));
//     return data;
// }

const PROJECT_ID = 'videobelajar-react'; // ganti sesuai project kamu

export async function retrieveData(collectionName, filterGroup = null) {
  const endpoint = `/projects/${PROJECT_ID}/databases/(default)/documents/${collectionName}`;

  const response = await api.get(endpoint);

  const documents = response.data.documents || [];

  const formatted = documents.map((doc) => {
    const id = doc.name.split('/').pop();
    const fields = Object.entries(doc.fields || {}).reduce((acc, [key, val]) => {
      // parsing stringValue, numberValue, etc.
      const value = Object.values(val)[0]; // ambil isi stringValue/numberValue/dll
      acc[key] = value;
      return acc;
    }, {});
    return {
      id,
      ...fields
    };
  });

  // filter jika dibutuhkan
  if (filterGroup) {
    return formatted.filter(item => item.group === filterGroup);
  }

  return formatted;
}
