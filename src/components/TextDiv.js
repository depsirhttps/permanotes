import React from "react";
import Entry from "./Entry";

import classes from "./styles/TextDiv.module.css";
import NewEntry from "./NewEntry";

const TextDiv = (props) => {
  var msgId = 0;

  return (
    <div className={classes.container}>
      {props.content.map((entry) => {
        msgId++;
        return <Entry msg={entry.msg} id={msgId.toString()} />;
      })}
    </div>
  );
};

export default TextDiv;
