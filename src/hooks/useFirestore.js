import { useReducer, useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

let initialState = {
  document: null,
  isPending: null,
  error: null,
  success: null,
};

export const useFirestore = (collection) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  // collection ref
  const ref = projectFirestore.collection(collection);

  // add a document
  const addDocument = (doc) => {};

  // delete a document
  const deleteDocument = (id) => {};

  useEffect(() => {
    return () => setIsCancelled(true);
  }, [response, addDocument, deleteDocument]);
};
