import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app);

export async function retrieveData(collectionName, filterGroup = null) {
    let q;
    if (filterGroup != null) {
        q = query(collection(firestore, collectionName), where("group", "==", filterGroup));
    } else {
        q = collection(firestore, collectionName);
    }
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    return data;
}