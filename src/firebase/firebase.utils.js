import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
  writeBatch,
} from "firebase/firestore";

import { getAuth } from "firebase/auth";

const SprtShopFirebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: "sprtshop-db",
  storageBucket: "sprtshop-db.appspot.com",
  messagingSenderId: "698983647933",
  appId: `${process.env.REACT_APP_ID}`,
};

// Initialize Firebase
const app = initializeApp(SprtShopFirebaseConfig);
// const analytics = getAnalytics(app);

// Setup and Initialize Firebase and Firestore.
export const auth = getAuth(app);
export const firestore = getFirestore(app);

//Helper function to store signed in users data when signing in with a federated identity provider'.
export const createUserDocument = async (user) => {
  if (!user) return;

  // Check if user document already exists if not, create it.
  const docReference = doc(firestore, "users", user.uid);
  const docSnapshot = await getDoc(docReference);

  if (!docSnapshot.exists()) {
    const { displayName, email, uid } = user;
    const createdAt = new Date();

    try {
      await setDoc(doc(firestore, "users", user.uid), {
        displayName,
        email,
        uid,
        createdAt,
      });
    } catch (error) {
      console.log({ errorCreatingUser: error.message });
    }
  }
  return docReference;
};

// Helper Function to add data to Firestore Database.
// CollectionKey is the name of the Firestore collection. It can be any string.
// writeBatch is used to perform multiple writes as a single atomic unit.
export const addCollectionAndDocs = async (collectionKey, collectionsData) => {
  const batch = writeBatch(firestore);
  Object.keys(collectionsData).forEach((key) => {
    const collectionRef = doc(firestore, `${collectionKey}`, `${key}`);
    batch.set(collectionRef, collectionsData[key]);
  });
  return await batch.commit();
};
