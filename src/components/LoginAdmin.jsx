import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LoginAdmin.css";

const LoginAdmin = ({ id, password, setAdminInfo, setIsAdmin }) => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setAdminInfo({ id: userName, password: userPassword });
    if (userName === "admin" && userPassword == "123456") {
      alert("Login success");
      setIsAdmin(true);
    } else {
      alert("Login Failed");
      setUserName("");
      setUserPassword("");
      return;
    }
    setUserName("");
    setUserPassword("");
  };

  return (
    <div className="login-admin text-warning">
      <Form style={{ width: "100%" }}>
        <Form.Label>Admin username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Admin username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Form.Group
          className="mb-3 d-flex flex-column"
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={userPassword}
            className=" tex-warning"
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          type="submit"
          variant="warning"
          size="lg"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginAdmin;
