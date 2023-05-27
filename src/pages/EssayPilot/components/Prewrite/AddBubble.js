import React from "react";
import classes from "./styles/AddBubble.module.css";
import { useState } from "react";

const AddBubble = (props) => {
  const [newIdea, setNewIdea] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const text = event.target[0].value;

    if (text.trim().length > 0) {
      props.onNewIdea(text.trim());
      setNewIdea("");
    }
  };

  const changeHandler = (event) => {
    setNewIdea(event.target.value);
  };

  return (
    <form className={classes.bubble} onSubmit={submitHandler}>
      <input
        onChange={changeHandler}
        type={props.type}
        placeholder={props.placeholder}
        value={newIdea}
      />
    </form>
  );
};

export default AddBubble;
