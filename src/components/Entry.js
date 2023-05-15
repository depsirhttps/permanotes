import React from "react";

import classes from './styles/Entry.module.css';

const Line = (props) => {
  return <p>{props.msg}</p>;
};

const Entry = (props) => {
  return (
    <div>
      <Line msg={props.msg}/>
    </div>
  );
};

export default Entry;
