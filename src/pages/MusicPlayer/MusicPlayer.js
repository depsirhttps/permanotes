import React from "react";
import classes from "./MusicPlayer.module.css";
import CurrentlyPlaying from "./components/Homepage/CurrentlyPlaying";
import SongInfo from "./components/Homepage/SongInfo";
import Visualizer from "./components/Homepage/Visualizer";
import ControlPanel from "./components/Homepage/ControlPanel";

const MusicPlayer = (props) => {
  return (
    <div className={classes.musicPlayer}>
      <CurrentlyPlaying/>
      <SongInfo/>
      <Visualizer/>
      <ControlPanel/>
    </div>
  );
};

export default MusicPlayer;
