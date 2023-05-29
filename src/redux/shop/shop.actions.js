import ShopActionTypes from "./shop.types";
import { createAction } from "../utils";

import { firestore } from "../../firebase/firebase.utils";
import { collection, query, onSnapshot } from "firebase/firestore";

export const fetchCollectionsStart = () =>
  createAction(ShopActionTypes.FETCH_COLLECTIONS_START);

export const fetchCollectionsSuccess = (transformedCollections) =>
  createAction(
    ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    transformedCollections
  );

export const fetchCollectionsFailure = (errorMessage) =>
  createAction(ShopActionTypes.FETCH_COLLECTIONS_FAILURE, errorMessage);

export const fetchCollectionsAsync = () => {
  const transformedCollections = {};
  return (dispatch) => {
    // Snapshot represenation of our collections array in our database.
    const collectionRef = query(collection(firestore, "collections"));
    dispatch(fetchCollectionsStart());

    // Get collection documents data from Firestore and set up our transformed collections object.
    onSnapshot(
      collectionRef,
      (snapShot) => {
        snapShot.forEach((doc) => {
          const { title, routeName, items } = doc.data();
          transformedCollections[routeName] = {
            id: doc.id,
            title,
            routeName,
            items,
          };
        });
        dispatch(fetchCollectionsSuccess(transformedCollections));
      },
      (error) => {
        const errorMessage = error.message;
        dispatch(fetchCollectionsFailure(errorMessage));
      }
    );
  };
};
