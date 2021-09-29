import React from "react";
import "./UserCard.css";
import { AiFillDelete } from "react-icons/ai";

const UserCard = (user, handleDelete) => {
  return (
    <div className="card-container">
      <span className="title">Name: {user.user.name}</span>
      <span className="id">ID: {user.user.userId}</span>
      <span className="date">Starting date: {user.user.startDate}</span>
      <span className="date">Ending date: {user.user.endDate}</span>
      <AiFillDelete
        className="delete"
        onClick={() => handleDelete(user.user.uniqueID)}
      />
    </div>
  );
};

export default UserCard;
