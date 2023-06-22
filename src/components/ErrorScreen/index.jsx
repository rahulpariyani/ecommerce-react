import React from "react";
import classes from "./index.module.scss";

const ErrorScreen = (props) => {
  const { message, children } = props;
  return (
    <section className={classes.container}>
      <p className={classes.message}>{message || children}</p>
    </section>
  );
};

export default ErrorScreen;
