import React, { useEffect, useState } from "react";
import { firebaseDB } from "../firebase";

function useFetch(collection) {
  const [list, setList] = useState([]);

  const getFireDB = () => {
    firebaseDB
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let newList = [];
        snap.forEach((doc) => {
          newList.push({ ...doc.data(), id: doc.id });
        });
        setList(newList);
      });
  };
  useEffect(() => {
    getFireDB();
    return ()=>getFireDB();
  }, [collection]);

  return { list };
}

export default useFetch;
