import React, { useState } from "react";
import classes from "./styles/Display.module.css";
import Input from "./Input";

const Display = (props) => {
  const [fullText, setfullText] = useState('let us pretend this is already a');

  const submitHandler = (word) => {
    setfullText(prev => prev + " " + word);
  };

  return (
    <div>
      <p>{fullText}</p>
      <Input type="text" placeholder="hehe" onSubmit={submitHandler} />
    </div>
  );
};

export default Display;
