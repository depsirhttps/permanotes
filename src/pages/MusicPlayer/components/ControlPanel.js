import React, { useState } from "react";
import classes from "./styles/ControlPanel.module.css";
import playSVG from "../images/play.svg";
import loop from "../images/loop.svg";
import heartEmpty from "../images/heartEmpty.svg";
import more from "../images/more.svg";
import prev from "../images/prev.svg";
import skip from "../images/skip.svg";
import share from "../images/share.svg";
import paused from "../images/paused.svg";

const ControlPanel = (props) => {

  const [isPlaying, setIsPlaying] = useState(true);
 
  const playHandler = event => {
    setIsPlaying(prev => !prev);
  }

  return (
    <div className={classes.controlPanel}>
      <div className={classes.buttons}>
        <img className={classes.heart} src={heartEmpty}/>
        <img className={classes.prev} src={prev}/>
        <img className={classes.play} src={isPlaying ? playSVG : paused} onClick={playHandler}/>
        <img className={classes.skip} src={skip}/>
        <img className={classes.loop} src={loop}/>
      </div>
    </div>
  );
};

export default ControlPanel;
