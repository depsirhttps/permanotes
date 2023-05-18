import React from "react";
import classes from './EssayThing.module.css';
import EssayInput from "./components/EssayInput";

const EssayThing = (props) => {
  return (
    <div className={classes.body}>
      <EssayInput />
    </div>
  );
};

export default EssayThing;
