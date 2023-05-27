import React from "react";
import classes from "./styles/SubBubble.module.css";

import arrow from '../../assets/subBubble.svg';

const SubBubble = (props) => {
  return (
    <div className={classes.subBubble}>
      <img src={arrow} class={classes.arrow}/>
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
};

export default SubBubble;
