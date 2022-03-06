import React from 'react';


function Social(props) {
  return (
    <div className={`social ${props.social}`}>
      {props.social}<br></br>
      <a href={props.url} rel="noreferrer" target="_blank"><img src={props.icon} alt={props.handle}></img></a><br></br>
    </div>
  )
}
export default Social