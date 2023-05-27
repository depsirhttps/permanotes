import React from "react";
import classes from "./styles/Bubble.module.css";

const Bubble = (props) => {
  return <input autoFocus className={classes.bubble} type="text" defaultValue={props.idea}/>;
};

export default Bubble;
