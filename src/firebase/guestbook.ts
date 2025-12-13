import { 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  limit,
  onSnapshot,
  Timestamp,
  serverTimestamp
} from "firebase/firestore";
import { db } from "./firebase";

export interface GuestbookComment {
  id: string;
  name: string;
  attendance: "hadir" | "tidak";
  message: string;
  createdAt: Timestamp;
  slug?: string; // Store the slug to track which guest submitted
}

export interface GuestbookFormData {
  name: string;
  attendance: "hadir" | "tidak";
  message: string;
  slug?: string;
}

/**
 * Save a new guestbook comment to Firestore
 */
export async function saveGuestbookComment(data: GuestbookFormData): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, "guestbook"), {
      name: data.name.trim(),
      attendance: data.attendance,
      message: data.message.trim(),
      slug: data.slug || null,
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error saving comment:", error);
    throw error;
  }
}

/**
 * Subscribe to guestbook comments in real-time
 * Returns an unsubscribe function
 */
export function subscribeToGuestbookComments(
  callback: (comments: GuestbookComment[]) => void,
  maxComments: number = 100
): () => void {
  const q = query(
    collection(db, "guestbook"),
    orderBy("createdAt", "desc"),
    limit(maxComments)
  );

  const unsubscribe = onSnapshot(
    q,
    (snapshot) => {
      const comments: GuestbookComment[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt as Timestamp,
      })) as GuestbookComment[];
      callback(comments);
    },
    (error) => {
      console.error("Error fetching comments:", error);
      callback([]);
    }
  );

  return unsubscribe;
}

