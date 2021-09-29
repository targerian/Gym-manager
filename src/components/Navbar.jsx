import React, { useState } from "react";
import { Button, Form, FormControl, Navbar } from "react-bootstrap";
import "./Navbar.css";

const NavbarGym = () => {
  const [searchedName, setSearchedName] = useState("");
  const [searchedID, setSearchedId] = useState("");
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        className="d-flex justify-content-between px-4 w-100 "
      >
        <Navbar.Brand href="#home" className="text-warning ">
          Golden Gym
        </Navbar.Brand>
        <div
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "row",
            margin: "0px 30px",
          }}
        >
          <FormControl
            type="search"
            placeholder="Search by"
            className="me-2 mw-30`"
            aria-label="Search"
            onChange={(e) => setSearchedName(e.target.value)}
          />
          <Button className="mr-4" variant="outline-warning">
            Search
          </Button>
        </div>
        <div style={{ width: "40%", display: "flex", flexDirection: "row" }}>
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setSearchedId(e.target.value)}
          />
          <Button variant="outline-warning">Search</Button>
        </div>
      </Navbar>
    </>
  );
};

export default NavbarGym;
