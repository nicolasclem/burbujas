import React from "react";
import { Link } from "react-router-dom";

const UserMsg = ({ data }) => {
  const { name, subject, content, id } = data;
  return (
    <>
      <Link to={`/admin/${id}`}>
        <div className="userMessage">
          <span className="userMessage-name">{name}</span>
          <span className="userMessage-subject">Asunto: {subject}</span>
          <span className="userMessage-content">{content}</span>
        </div>
      </Link>
    </>
  );
};

export default UserMsg;
