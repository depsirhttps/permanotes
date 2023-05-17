import React, { useEffect, useState } from "react";

import classes from "./styles/NewEntry.module.css";

const NewEntry = (props) => {
  const [style, setStyle] = useState({
    bottom: "99px",
  });

  const changeHandler = (event) => {

    var inputLinesReal = props.inputLines;
    
    if(event){
      const inputEl = document.getElementById("INPUT_DIV");
      const inputHeight = inputEl.offsetHeight;
      const inputLines = inputHeight / 50;
  
      inputLinesReal = Math.round(inputLines);
    }
    
    var calculatedBottom = 99;

    if (inputLinesReal > 1) {
      calculatedBottom = inputLinesReal * 50 + 49;
    }

    var displayBottom = calculatedBottom.toString() + "px";
    var color = "#7c7c7c";

    // const ar = event.target.innerHTML.split("<div>");
    // var numOfSpaces = 0;

    // for (let i = 0; i < ar.length; i++) {
    //   if (ar[i] === "<br></div>" || ar[i] === "<br>") {
    //     numOfSpaces++;
    //   }
    // }

    // if (numOfSpaces >= 1) {
    //   color = "red";
    // }

    setStyle({
      bottom: displayBottom,
      color: color,
    });

    props.onInputLines(inputLinesReal);
  };

  useEffect(() => {
    changeHandler(null)
  }, [props.inputLines]);

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
