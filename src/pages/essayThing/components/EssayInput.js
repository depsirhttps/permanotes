import React from "react";
import classes from "./styles/EssayInput.module.css";

const EssayInput = (props) => {
  return (
    <div className={classes.container}>
      <textarea className={classes.input}>This is a test of my essay site. Welcome to essayThing!</textarea>
    </div>
  );
};

export default EssayInput;
