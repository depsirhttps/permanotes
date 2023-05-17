import React, { useEffect, useRef, useState } from "react";
import LineDiv from "./components/LineDiv";
import TextDiv from "./components/TextDiv";
import NewEntry from "./components/NewEntry";
import { Keyboard } from 'react-native';

const Permanotes = (props) => {
  const [DUMMY_CONTENT, setDUMMY_CONTENT] = useState([
    {
      msg: "I hope I will be able to confide everything to you, as I have never been able to confide in anyone, and I hope you will be a great source of comfort and support.",
    },
    {
      msg: "I'll begin from the moment I got you, the moment I saw you lying on the table among my other birthday presents. (I went along when you were bought, but that doesn't count.)",
    },
    {
      msg: "On Friday, June 12, I was awake at six o'clock, which isn't surprising, since it was my birthday. But I'm not allowed to get up at that hour, so I had to control my curiosity until quarter to seven. When I couldn't wait any longer, I went to the dining room, where Moortje (the cat) welcomed me by rubbing against my legs.",
    },
    {
      msg: "They gave me a beautiful book, Dutch Sasas and Lesends, but they gave me Volume II by mistake, so I exchanged two other books for Volume I. Aunt Helene brought me a puzzle, Aunt Stephanie a darling brooch and Aunt Leny a terrific book: Daisy Goes to the Mountains.",
    },
    {
      msg: "the above were excerpts of anne frank's diary.",
    },
    {
      msg: "these are dummy inputs",
    },
  ]);

  const [LINE_CONTENT, setLINE_CONTENT] = useState([
    ...Array(DUMMY_CONTENT.length * 2),
  ]);

  const [LINE_LENGTH, setLINE_LENGTH] = useState(LINE_CONTENT.length);
  const [isNew, setIsNew] = useState(true);
  const [inputLines, setInputLines] = useState(1);

  const getInputLines = () => {
    var inputLinesReal = Math.round(inputLines);
    if (!isNew) {
      const inputEl = document.getElementById("INPUT_DIV");
      const inputHeight = inputEl.offsetHeight;
      const inputLines = inputHeight / 50;
    } else {
      inputLinesReal = 0;
    }
    return inputLinesReal;
  };

  const changeLines = (iLines) => {
    var numOfLines = 0;

    if (isNew) {
      numOfLines = 2;
    }

    if (iLines) {
      numOfLines += iLines - 1;
    }

    for (let i = 1; i < DUMMY_CONTENT.length + 1; i++) {
      const el = document.getElementById(i.toString());
      const height = el.offsetHeight;
      const lines = height / 50;

      numOfLines++;
      numOfLines++;

      if (lines > 1) {
        var w = lines - 1;
        numOfLines += w;
      }
    }

    setLINE_CONTENT((prev) => {
      return [...Array(numOfLines)];
    });
  };

  const resizeHandler = (t) => {
    changeLines(getInputLines());
    setInputLines(getInputLines());
  };

  useEffect(() => {
    window.addEventListener("pageshow", resizeHandler);
    window.addEventListener("resize", resizeHandler);

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        resizeHandler();
      }
    )

    return (_) => {
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("pageshow", resizeHandler);
      keyboardDidHideListener.remove();
    };
  }, []);


  const lineHandler = (lines) => {
    changeLines(lines);
  };

  const submitHandler = (text) => {
    setDUMMY_CONTENT((prev) => [
      ...prev,
      {
        msg: text,
      },
    ]);
    setIsNew(false);
  };

  const test = event => {
    console.log(event);
  }

  return (
    <div>
      <div>
        <LineDiv
          isNew={isNew}
          onSubmit={submitHandler}
          inputLines={inputLines}
          onInputLines={lineHandler}
          content={LINE_CONTENT}
        />
        <TextDiv content={DUMMY_CONTENT} />
      </div>
    </div>
  );
};

export default Permanotes;
