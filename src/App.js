import React, { useEffect, useRef, useState } from "react";
import LineDiv from "./components/LineDiv";
import TextDiv from "./components/TextDiv";
import NewEntry from "./components/NewEntry";

const DUMMY_CONTENT = [
  {
    msg: "bruhbruhbruhbruhbruhbruhbruhbruhbruhbruhbruhbruhbruhbruhbruhbruhbruhbruh",
  },
  {
    msg: "hehe",
  },
  {
    msg: "sex sex boobies",
  },
  {
    msg: "rACIAL SLur",
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
];

const App = (props) => {
  const [LINE_CONTENT, setLINE_CONTENT] = useState([
    ...Array(DUMMY_CONTENT.length * 2),
  ]);

  const [LINE_LENGTH, setLINE_LENGTH] = useState(LINE_CONTENT.length);
  const [isNew, setIsNew] = useState(true);

  const changeLines = () => {
    var numOfLines = 0;

    if(isNew){
      numOfLines = 2;
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

  useEffect(() => {
    changeLines();
    window.addEventListener("resize", changeLines);

    return (_) => {
      window.removeEventListener("resize", changeLines);
    };
  }, []);

  return (
    <div>
      <div>
        <LineDiv isNew={isNew} content={LINE_CONTENT} />
        <TextDiv content={DUMMY_CONTENT} />
      </div>
      <NewEntry />
    </div>
  );
};

export default App;
