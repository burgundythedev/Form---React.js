import React from "react";
import "./UserItems.css";

const UserItems = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <li className="users" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default UserItems;
