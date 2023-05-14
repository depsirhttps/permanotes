import React from "react";

import classes from "./Entry.module.css";

const Line = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.line}></div>
      <p>{props.msg}</p>
    </div>
  );
};

const Entry = (props) => {
  return (
    <div>
      <Line msg={props.msg} />
      <Line />
    </div>
  );
};

export default Entry;
