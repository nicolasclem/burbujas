import { createContext, useContext } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useFirebaseApp } from "../fireBaseApp/FireBaseAppContext";
import { useState } from "react";
import { useFirebaseDb } from "../fireBaseDb/FirebaseDbContext";

export const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

const FirebaseAuth = ({ children }) => {
  const app = useFirebaseApp();
  const auth = getAuth(app);
  const { getUser } = useFirebaseDb();
  const [userData, setUserData] = useState(null);

  const signup = async (email, password, OnSignup = undefined) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      return OnSignup && OnSignup();
    } catch (err) {
      console.log(`Mostrar el error con una alerta ${err.message}`);
    }
  };

  const login = async (email, password, OnLogin = undefined) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = await getUser(email);
      setUserData(user);
      return OnLogin && OnLogin();
    } catch (err) {
      console.log(`Mostrar el error con una alerta ${err.message}`);
    }
  };

  const logout = async (OnLogout = undefined) => {
    try{
    await signOut(auth)
    setUserData(null)
    return OnLogout && OnLogout()
    }
    catch (err) {
      console.log(`Mostrar el error con una alerta ${err.message}`)
    }
  };

  const services = {
    login,
    logout,
    userData,
    signup,
  };

  return (
    <authContext.Provider value={services}>{children}</authContext.Provider>
  );
};

export default FirebaseAuth;
