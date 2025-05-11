import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo.jpeg"; 

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <nav className={show ? "navbar show_navbar" : "navbar"}>
        <div className="logo">
        <img src={logo} alt="logo" style={{ width: "45px", height: "45px" }}/>
          <h4>CareerCraft</h4>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to={"/"} onClick={() => setShow(!show)}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/jobs"} onClick={() => setShow(!show)}>
                Jobs
              </Link>
            </li>
            {isAuthenticated ? (
              <li>
                <Link to={"/dashboard"} onClick={() => setShow(!show)}>
                  Dashboard
                </Link>
              </li>
            ) : (
              <div className="nav-sign">
                <li>
                  <Link to={"/login"} onClick={() => setShow(!show)}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to={"/register"} onClick={() => setShow(!show)}>
                    Register
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
      </nav>
    </>
  );
};

export default Navbar;
