import React from "react";
import NavBarLateral from "../components/NavBarLateral";
import UserAdminContainer from "../components/UserAdminContainer";

const UserAdmin = () => {
  return (
    <div className="userPanel">
      <NavBarLateral />
      <UserAdminContainer />
    </div>
  );
};

export default UserAdmin;
