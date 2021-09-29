import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginAdmin from "./components/LoginAdmin";
import NavbarGym from "./components/Navbar";
import Users from "./components/Users";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [{ id, password }, setAdminInfo] = useState({ id: "", password: "" });

  // useEffect(() => {
  //   if (id === "admin" && password == "123456") {
  //     alert(" Login success!");
  //     setIsAdmin(true);
  //   } else {
  //     alert("login failed, refresh the page");
  //   }
  // }, [id, password]);
  return (
    <>
      <Router>
        {!isAdmin ? (
          <LoginAdmin
            id={id}
            password={password}
            setAdminInfo={setAdminInfo}
            setIsAdmin={setIsAdmin}
          />
        ) : (
          <>
            <NavbarGym />
            <Users />
          </>
        )}
      </Router>
    </>
  );
}

export default App;
