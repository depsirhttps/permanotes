import React from "react";
import classes from "./styles/AddBubble.module.css";
import { useState } from "react";

const AddBubble = (props) => {
  const [bubbleId, setBubbleId] = useState(1);

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const changeHandler = (event) => {
    const text = event.target.value;

    if (text.trim().length > 0) {
      props.onNewIdea(text.trim(), "bubble_" + bubbleId);
      setBubbleId(prev => prev += 1);
      event.target.value = "";
    }
  };

  return (
    <form className={classes.bubble} onSubmit={submitHandler}>
      <input
        onChange={changeHandler}
        type={props.type}
        placeholder={props.placeholder}
      />
    </form>
  );
};

export default AddBubble;
