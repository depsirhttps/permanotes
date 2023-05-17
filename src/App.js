import React from "react";
import Permanotes from "./pages/permanotes/Permanotes";
import { Analytics } from '@vercel/analytics/react';

const App = (props) => {
  return (
    <>
      <Permanotes/>
      <Analytics/>
    </>
  );
};

export default App;
