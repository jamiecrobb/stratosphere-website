import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = () => {
  return (
    <>
      <ul className="nav-links">
        <li>
          <NavLink to="/student">Student</NavLink>
        </li>
        <li>
          <NavLink to="/teacher">Teacher</NavLink>
        </li>
        <li>
          <NavLink to="/business">Business</NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
