/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../fireBaseConfig/fireBaseConfig";
import { useState, useContext, createContext } from "react";
import { FirebaseDbProvider } from "../fireBaseDb/FirebaseDbContext";
import FirebaseAuth from "../fireBaseAuth/FirebaseAuth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase

const FirebaseAppContext = createContext();

const useFirebaseApp = () => {
  return useContext(FirebaseAppContext);
};

const FirebaseAppProvider = ({ children }) => {
  const [app, setApp] = useState(initializeApp(firebaseConfig));

  return (
    <FirebaseAppContext.Provider value={app}>
      <FirebaseDbProvider>
        <FirebaseAuth>
            {children}
        </FirebaseAuth>
      </FirebaseDbProvider>
    </FirebaseAppContext.Provider>
  );
};

export { FirebaseAppProvider, FirebaseAppContext, useFirebaseApp };
