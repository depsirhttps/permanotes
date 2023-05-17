import React, { useEffect, useRef, useState } from "react";
import LineDiv from "./components/LineDiv";
import TextDiv from "./components/TextDiv";
import NewEntry from "./components/NewEntry";

const Permanotes = (props) => {
  const [DUMMY_CONTENT, setDUMMY_CONTENT] = useState([
    {
      msg: "bruhbruhbruhbruhbruhbruhbruhbruhbruhbruhbruhbruhbruhbruhbruhbruhbruhbruh",
    },
    {
      msg: "hehe",
    },
    {
      msg: "wdwd swdwdwex wdwwsadbb",
    },
    {
      msg: "wuw",
    },
    {
      msg: "u matter.",
    },
    {
      msg: "jk",
    },
    {
      msg: "bruh",
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
    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return (_) => {
      window.removeEventListener("resize", resizeHandler);
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
