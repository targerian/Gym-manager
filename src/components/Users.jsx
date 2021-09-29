import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import useLocalStorage from "../hooks/useLocalStorage.js";
import UserCard from "./UserCard.jsx";
import "./Users.css";
import { FaRegEdit } from "react-icons/fa";

const Users = () => {
  const [gymUsers, setGymUsers] = useState([]);
  const [user, setUser] = useState({
    name: "",
    userId: "",
    startDate: "",
    endDate: "",
    avatar: "",
    uniqueID: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const uniqueId = new Date().getUTCMilliseconds();
    const newUser = { ...user, uniqueID: uniqueId };
    console.log(newUser);
    setGymUsers((prev) => [newUser, ...gymUsers], console.log(gymUsers));
    console.log(gymUsers);
  };
  const handleDelete = (i) => {
    if (window.confirm("Are you sure that you want to delete this member?")) {
      const filtered = gymUsers.filter((user) => user.uniqueID !== i);
      setGymUsers(filtered);
    } else {
      return;
    }
  };

  const handleEdit = (i) => {
    alert(`${i} has been edited`);
  };

  return (
    <>
      <div className="adder-container">
        <h2>Add member </h2>
        <div className="d-flex">
          <input
            type="text"
            placeholder="name"
            value={user.name}
            name="name"
            onChange={handleChange}
          />
          <input
            type="number"
            name="userId"
            placeholder="ID"
            value={user.userId}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="d-flex">
          <input
            type="date"
            name="startDate"
            placeholder="Start Date"
            value={user.startDate}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="date"
            name="endDate"
            placeholder="End Date"
            value={user.endDate}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <Button onClick={handleSubmit} variant="warning">
          Submit
        </Button>
      </div>

      {gymUsers.map((user) => {
        return (
          <div className="cards-container">
            <div className="card-container" key={user.uniqueID}>
              <span className="title">Name: {user.name}</span>
              <span className="id">ID: {user.userId}</span>
              <span className="date">Starting date: {user.startDate}</span>
              <span className="date">Ending date: {user.endDate}</span>
              <FaRegEdit
                class="edit"
                onClick={() => handleEdit(user.uniqueID)}
              />
              <AiFillDelete
                className="delete"
                onClick={() => handleDelete(user.uniqueID)}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Users;
