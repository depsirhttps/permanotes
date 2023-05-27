import React from "react";
import { Analytics } from "@vercel/analytics/react";
import EssayPilot from "./pages/EssayPilot/EssayPilot";

const App = (props) => {
  return (
    <>
      <EssayPilot/>
      <Analytics />
    </>
  );
};

export default App;
