import React from "react";
import Entry from "./Entry";

import classes from "./NotePage.module.css";

const NotePage = (props) => {
  return (
    <div className={classes.container}>
      {props.content.map((entry) => {
        return (
          <Entry msg={entry.content}/>
        )
      })}
    </div>
  );
};

export default NotePage;
