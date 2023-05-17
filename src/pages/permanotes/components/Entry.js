import React, { useEffect, useState } from "react";

import classes from './styles/Entry.module.css';

const Entry = (props) => {

  const [numOfLines, setNumOfLines] = useState(0);
  const msgId = props.id;

  return (
    <div>
      <p id={msgId}>
        {props.msg}
      </p>
    </div>
  );
};

export default Entry;
