import React from "react";
import classes from "./index.module.scss";

const Button = (props) => {
  const { onClick, children, className, disabled } = props;
  return (
    <button
      onClick={onClick}
      className={`${className} ${classes.button}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
