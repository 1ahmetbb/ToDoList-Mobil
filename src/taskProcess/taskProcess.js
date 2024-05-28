import { db, auth } from "../../firebaseConfig";
import { collection, addDoc, getDoc, doc, deleteDoc } from "firebase/firestore";

export const addTask = async (state) => {
  try {
    const user = auth.currentUser;
    await addDoc(collection(db, `users/${user.uid}/tasks`), { ...state });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getTask = async (state) => {
  try {
    const user = auth.currentUser;
    const tasks = await getDoc(collection(db, `users/${user.uid}/tasks`));
    return tasks;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const deleteTask = async (taskId) => {
  try {
    await deleteDoc(doc(db, `users/${user.uid}/tasks`, taskId));
  } catch (e) {
    console.error("Error delete document: ", e);
  }
};
