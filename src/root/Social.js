import React from 'react';


function Social(props) {
  return (
    <div className="social">
      {props.social}<br></br>
      <a href={props.url}>{props.handle}</a><br></br>
    </div>
  )
}
export default Social