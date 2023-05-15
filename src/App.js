import React from "react";
import LineDiv from "./components/LineDiv";
import TextDiv from "./components/TextDiv";

const DUMMY_CONTENT = [
  {
    msg: "bruh",
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

var LINE_CONTENT = [
  ...DUMMY_CONTENT,
  ...DUMMY_CONTENT
]

const App = (props) => {
  return (
    <div>
      <LineDiv content={LINE_CONTENT} />
      <TextDiv content={DUMMY_CONTENT}/>
    </div>
  );
};

export default App;
