import React from "react";
import LineBlock from "./LineBlock";

import classes from "./styles/LineDiv.module.css";

import VerticalLine from "./VerticalLine";
import NewEntry from "./NewEntry";

const LineDiv = (props) => {
  const lineHandler = (lines) => {
    props.onInputLines(lines);
  };

  var msgId = 0;

  const submitHandler = (text) => {
    props.onSubmit(text);
  }

  return (
    <div className={classes.container}>
      <VerticalLine />
      {props.content.map((entry) => {
        msgId++;
        return <LineBlock key={msgId.toString()}/>
      })}

      {props.isNew && <NewEntry onSubmit={submitHandler} inputLines={props.inputLines} onInputLines={lineHandler} />}
    </div>
  );
};

export default LineDiv;
