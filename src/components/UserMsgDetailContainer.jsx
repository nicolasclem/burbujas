import { useEffect, useState } from "react";
import NavBarLateral from "./NavBarLateral";
import UserMsgDetail from "./UserMsgDetail";
import { data } from "../db/userMsgTest";
import { useParams } from "react-router-dom";

const UserMsgDetailContainer = () => {
  const [msg, setMsg] = useState([]);
  const { id } = useParams();

  const getData = (id) => {
    let newData = data.find((el) => el.id === Number(id));
    return setMsg(newData);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <div className="userPanel">
      <NavBarLateral />
      <UserMsgDetail data={msg} key={data.id} />
    </div>
  );
};

export default UserMsgDetailContainer;
