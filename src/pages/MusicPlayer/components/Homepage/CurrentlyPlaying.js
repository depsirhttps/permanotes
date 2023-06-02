import React from 'react';
import classes from './styles/CurrentlyPlaying.module.css';

const CurrentlyPlaying = (props) => {
  return <div className={classes.currentlyPlaying}>
    <img src="https://i.scdn.co/image/ab6761610000e5ebd0f8fb5691ea660889d10eb1"/>
    <div className={classes.info}>
      <p className={classes.display}>CURRENTLY PLAYING</p>
      <p className={classes.playlistTitle}>The Click</p>
    </div>
  </div>
};

export default CurrentlyPlaying