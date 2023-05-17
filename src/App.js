import React from "react";
import Permanotes from "./pages/permanotes/Permanotes";
import OneCheck from './pages/oneCheck/OneCheck';
import { Analytics } from '@vercel/analytics/react';

const App = (props) => {
  return (
    <>
      <OneCheck/>
      <Analytics/>
    </>
  );
};

export default App;
