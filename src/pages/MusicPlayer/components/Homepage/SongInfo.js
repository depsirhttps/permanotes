import React from 'react';
import classes from './styles/SongInfo.module.css';

const SongInfo = (props) => {
  return <div className={classes.songInfo}>
    <img src="https://i1.sndcdn.com/artworks-YJ94pWi5JYT8-0-t500x500.jpg"/>
    <div className={classes.text}>
      <p className={classes.title}>Overture</p>
      <p className={classes.artist}>AJR</p>
    </div>
  </div>
};

export default SongInfo