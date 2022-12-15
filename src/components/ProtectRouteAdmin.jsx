import { Navigate } from "react-router-dom";
import { useAuth } from "../context/fireBaseAuth/FirebaseAuth";
//import Loading from "../Loading/Loading";

export const ProtectedRouteAdmin = ({ children }) => {
  const { userData } = useAuth();


    if (!userData || (userData && userData.role !== 'admin')) return <Navigate to="/" />;
 
  

  return <>{children}</>;
};
