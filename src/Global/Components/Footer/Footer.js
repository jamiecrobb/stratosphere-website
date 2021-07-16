import React from "react";

import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-text">© Stratosphere Talent Ltd 2021</p>
      <Link to="/policies" className="footer-text">
        Data Protection and Privacy Policies
      </Link>
    </div>
  );
};

export default Footer;
