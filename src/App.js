import React from "react";
import { Analytics } from "@vercel/analytics/react";
import TheLastWord from "./pages/TheLastWord/TheLastWord";

const App = (props) => {
  return (
    <>
      <TheLastWord/>
      <Analytics />
    </>
  );
};

export default App;
