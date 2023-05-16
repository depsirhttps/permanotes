import React, { useEffect, useState } from "react";

import classes from "./styles/NewEntry.module.css";

const NewEntry = (props) => {
  const [style, setStyle] = useState({
    bottom: "99px",
  });

  const changeHandler = (event) => {
    // console.log(event.target.innerHTML);
    const inputEl = event.target;
    const inputHeight = inputEl.offsetHeight;
    const inputLines = inputHeight / 50;

    const inputLinesReal = Math.round(inputLines);

    var calculatedBottom = 99;

    if (inputLinesReal > 1) {
      calculatedBottom = inputLinesReal * 50 + 49;
    }

    var displayBottom = calculatedBottom.toString() + "px";

    setStyle({
      bottom: displayBottom,
    });

    props.onInputLines(inputLinesReal);
  };

  return (
    <div style={style} className={classes.container}>
      <div
        onInput={changeHandler}
        id="INPUT_DIV"
        contentEditable
        placeholder="If you could say anything to future generations..."
        type="text"
      ></div>
    </div>
  );
};

export default NewEntry;
