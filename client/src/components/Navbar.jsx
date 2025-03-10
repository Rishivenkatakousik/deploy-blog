import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/Usercontext";

const Navbar = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch(`${import.meta.env.API_URL}/profile`, {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  const logout = () => {
    fetch(`${import.meta.env.API_URL}/logout`, {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  };

  const username = userInfo?.username;

  return (
    <div>
      <main>
        <header>
          <Link to="/" className="logo">
            My blog
          </Link>
          <nav>
            {username && (
              <>
                <Link to="/create">Create new post</Link>
                <a onClick={logout}>Logout</a>
              </>
            )}
            {!username && (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </nav>
        </header>
      </main>
    </div>
  );
};

export default Navbar;
