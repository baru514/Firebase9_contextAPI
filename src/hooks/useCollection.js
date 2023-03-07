import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, orderBy, query, serverTimestamp,  where } from "firebase/firestore"
import { useEffect, useRef, useState } from "react";
import { db } from "../firebase/config"


export const useCollection = (c, queryOptions, queryOrderBy) => {
  const [documents, setDocuments] = useState(null);

  const q = useRef(queryOptions).current;
  const qob = useRef(queryOrderBy).current;
    useEffect(()=>{
      let ref = collection(db, c );
      if(q && qob){
        ref = query(ref,where(...q),orderBy(...qob))
      }
      const unsub = onSnapshot(ref, (snapshot)=>{
        let results = [];
        snapshot.docs.forEach((doc)=>{
          results.push({id: doc.id, ...doc.data()});
        })
        setDocuments(results);
      })
      return () => unsub();
    },[c,q])


  const addDocu = async (docu) => {
    let ref = collection(db, c);
    const createdAt = serverTimestamp();
    await addDoc(ref, {...docu, createdAt});
  }

  const delDocu = async (id) => {
    let docRef = doc(db, c, id);
    await deleteDoc(docRef);
  }

  return {documents, addDocu, delDocu}
}