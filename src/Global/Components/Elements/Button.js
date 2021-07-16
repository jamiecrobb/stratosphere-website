import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const Button = (props) => {
  return (
    <Link
      to={props.to}
      exact={props.exact}
      className={`button button--${props.size} button--${props.color}`}
    >
      {props.children}
    </Link>
  );
};

export default Button;
