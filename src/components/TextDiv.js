import React from "react";
import Entry from "./Entry";

import classes from "./styles/TextDiv.module.css";

const TextDiv = (props) => {

  return (
    <div className={classes.container}>
      {props.content.map((entry) => (
        <Entry msg={entry.msg} />
      ))}
    </div>
  );
};

export default TextDiv;
