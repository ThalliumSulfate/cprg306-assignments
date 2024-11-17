import {db} from '../_utils/firebase'
import {collection, getDocs, addDoc, query} from 'firebase/firestore'

export async function getItems(userId) {
    let items = [];

    const q = query(collection(db, "users", userId, "items"));

    const snap = await getDocs(q);

    snap.forEach((doc) => {
        items.push(doc.data());
    })

    return items;
}

export async function addItem(userId, name, quantity, category) {
    console.log(userId);

    const docRef = await addDoc(collection(db, "users", userId, "items"), {
        name: name,
        quantity : quantity,
        category: category,
    });

    return docRef.id;
}
