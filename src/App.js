import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedRouteAdmin } from "./components/ProtectRouteAdmin";
import Home from "./pages/Home";
import UserAdmin from "./pages/UserAdmin";
import UserMsgDetailContainer from "./components/UserMsgDetailContainer";
import { ModalProvider } from "./context/modal/modalContext";
import CreateAdmin from "./pages/CreateAdmin";

function App() {
  return (
    <Router>
      <ModalProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/admin"
            element={
              <ProtectedRouteAdmin>
                <UserAdmin />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="/admin/:id"
            element={
              <ProtectedRouteAdmin>
                <UserMsgDetailContainer />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="/admin/crear-admin"
            element={
              <ProtectedRouteAdmin>
                <CreateAdmin />
              </ProtectedRouteAdmin>
            }
          />
        </Routes>
      </ModalProvider>
    </Router>
  );
}

export default App;
