import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

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

export { getPhotographers };
