import React from "react";
import CreateAdminComponent from "../components/CreateAdminComponent";
import NavBarLateral from "../components/NavBarLateral";

const CreateAdmin = () => {
  return (
    <div className="userPanel">
      <NavBarLateral />
      <CreateAdminComponent />
    </div>
  );
};

export default CreateAdmin;
