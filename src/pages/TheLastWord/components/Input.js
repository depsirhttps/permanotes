import React, { useState } from "react";
import classes from "./styles/Input.module.css";

const Input = (props) => {
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(event.target.children[0].value);
    setSubmitted(true);
  };

  return (
    <div>
      {!submitted && (
        <form onSubmit={submitHandler}>
          <input type={props.type} placeholder={props.placeholder} />
        </form>
      )}
    </div>
  );
};

export default Input;
