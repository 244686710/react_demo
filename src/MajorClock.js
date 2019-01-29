import React from 'react';

import padStart from 'lodash/padStart';

const ms2Time = (milliseconds) => {
  let time = milliseconds;
  const ms = milliseconds % 1000;
  time = (milliseconds - ms) / 1000;
  const seconds = time % 60;
  time = (time - seconds) / 60;
  const minutes = time % 60;
  const hours = (time - minutes) / 60;

  const result = padStart(hours, 2, '0') + ":" + padStart(minutes, 2, '0') + ":" + padStart(seconds, 2, '0') + "." + padStart(ms, 3, '0');
  return result;
}

const style = {
  'fontFamily': 'monospace',
  'color': 'red'
}

const MajorClock = ({milliseconds=0}) => {
  return (
    <React.Fragment>
      <style jsx> {`
        h1 {
          font-family: monospace;
          color: #ff0000
        }
      `}
      </style>
      <h1>{ms2Time(milliseconds)}</h1>
    </React.Fragment>  
  ) 
}

export default MajorClock;