import React, { useEffect, useState } from "react";

import classes from "./styles/NewEntry.module.css";

const NewEntry = (props) => {
  const [style, setStyle] = useState({
    bottom: "99px",
  });

  const [isValid, setIsValid] = useState(true);
  const [typing, setTyping] = useState(false);

  const changeHandler = (event) => {
    var inputLinesReal = props.inputLines;
    const inputEl = document.getElementById("INPUT_DIV");

    if (event) {
      const inputHeight = inputEl.offsetHeight;
      const inputLines = inputHeight / 50;

      inputLinesReal = Math.round(inputLines);
    }

    var calculatedBottom = 99;
    var buttonBottom = 50;

    if (inputLinesReal > 1) {
      calculatedBottom = inputLinesReal * 50 + 49;
    }

    var displayBottom = calculatedBottom.toString() + "px";
    var buttonBottomDisplay = buttonBottom.toString() + "px";
    var color = "#7c7c7c";

    // console.log(inputEl.children[0].innerHTML);
    var numOfSpaces = 0;

    for (const child of inputEl.children) {
      // console.log(child.innerHTML);

      if (child.innerHTML.trim() === "<br>") {
        numOfSpaces++;
      }
    }

    if (
      numOfSpaces >= 1 ||
      inputLinesReal > 7 ||
      inputEl.innerHTML === "" ||
      inputEl.innerHTML === "<div><br></div>"
    ) {
      color = "red";
      setIsValid(false);
    } else {
      setIsValid(true);
    }

    setStyle({
      bottom: displayBottom,
      color: color,
    });

    if (inputEl.innerHTML === "" || inputEl.innerHTML === "<div><br></div>") {
      setTyping(false);
      inputEl.innerHTML = "";
    } else {
      setTyping(true);
    }

    props.onInputLines(inputLinesReal);
  };

  useEffect(() => {
    changeHandler(null);
  }, [props.inputLines]);

  const submitHandler = (event) => {
    const inputEl = document.getElementById("INPUT_DIV");
    var rawText = inputEl.innerHTML.replace('<div>', '[]');
    rawText = rawText.replace('</div>', '');
    
    props.onSubmit(rawText);
  };

  return (
    <>
      <div style={style} className={classes.container}>
        <div
          onInput={changeHandler}
          id="INPUT_DIV"
          contentEditable
          type="text"
        ></div>
        {!typing && (
          <p id="INPUT_P" className={classes.p}>
            If you could say anything to future generations...
          </p>
        )}
      </div>{" "}
      <button
        onClick={submitHandler}
        disabled={!isValid}
        className={classes[isValid.toString()]}
      >
        Submit
      </button>
    </>
  );
};

export default NewEntry;
