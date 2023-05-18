import React from "react";
import Permanotes from "./pages/permanotes/Permanotes";
import { Analytics } from "@vercel/analytics/react";
import EssayThing from "./pages/essayThing/EssayThing";

const App = (props) => {
  return (
    <>
      <EssayThing/>
      <Analytics />
    </>
  );
};

export default App;
