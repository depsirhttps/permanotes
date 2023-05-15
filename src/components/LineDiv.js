import React from 'react';
import LineBlock from './LineBlock';

import classes from './styles/LineDiv.module.css';

import VerticalLine from './VerticalLine';

const LineDiv = (props) => {

  return (
    <div className={classes.container}>
      <VerticalLine/>
      {
        props.content.map(entry => <LineBlock />)
      }
    </div>
  )
};

export default LineDiv