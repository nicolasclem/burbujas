import { useState, useEffect, createContext, useContext } from "react";

import {
  getFirestore,
  addDoc,
  deleteDoc,
  collection,
  getDocs,
  where
} from "firebase/firestore";

import { useFirebaseApp } from "../fireBaseApp/FireBaseAppContext";

const FirebaseDbContext = createContext();

const useFirebaseDb = () => {
  return useContext(FirebaseDbContext);
};

const FirebaseDbProvider = ({ children }) => {
  const [db, setDb] = useState(null);

  const app = useFirebaseApp();

  const saveMessage = async (message, OnSuccess = undefined) => {
    try {
      await addDoc(collection(db, "messages"), message);
      if(OnSuccess) OnSuccess();
    } catch (err) {
      //TODO: Agregar alerta.
      alert("Error enviando mensaje, por favor intente mas tarde", err);
    }
  };
  
  const deleteMessage = async (messageId, OnSuccess = undefined) => {
    try {
      await deleteDoc(collection(db, "messages"), messageId);
      if(OnSuccess) OnSuccess();
    } catch (err) {
      //Todo: Agregar alerta.
      alert("No se pudo eliminar el mensaje, por favor intente mas tarde", err);
    }
  };

  const getMessages = async () => {

        const querySnapshot = await getDocs(collection(db, "messages"));
        return querySnapshot.map((doc) => doc.data());

  };

  const getUser = async (email) => {
 
  const querySnapshot = await getDocs(collection(db,'users'),where('email', '==', email))
  let result
  querySnapshot.forEach(user => result = user.data())
  return result
  };


  useEffect(() => {
    if (db === null) setDb(getFirestore(app));
  }, [db, app]);

  const services = { saveMessage, deleteMessage, getMessages, getUser };

  return (
    <FirebaseDbContext.Provider value={services}>
      {children}
    </FirebaseDbContext.Provider>
  );
};

export { FirebaseDbProvider, FirebaseDbContext, useFirebaseDb };
