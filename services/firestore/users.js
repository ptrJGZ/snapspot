import { doc, getDoc, collection, getDocs, where } from "firebase/firestore";
import { db } from "../firebaseConfig";

// Fetch current user
const getClient = async () => {
  try {
    const docRef = doc(db, "clients", "PKS9CAGAECtY7a8JWkCF");
    const docSnap = await getDoc(docRef);
    return { id: docSnap.id, ...docSnap.data() };
  } catch (e) {
    console.error("Error (getClient): ", e);
  }
};

// Fetch all photographers
const getPhotographers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "photographers"));

    const photographers = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return photographers;
  } catch (e) {
    console.error("Error (getPhotographers): ", e);
  }
};

export { getClient, getPhotographers };
