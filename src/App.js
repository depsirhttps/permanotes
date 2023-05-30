import React from "react";
import { Analytics } from "@vercel/analytics/react";
import MusicPlayer from "./pages/MusicPlayer/MusicPlayer";

const App = (props) => {
  return (
    <>
      <MusicPlayer/>
      <Analytics />
    </>
  );
};

export default App;
