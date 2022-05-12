import React from 'react';
function CatGroup(props) {
  return (
    <span className={`cat-group-box`}>
      <span className={`cat-group-title ${props.title}`}>
        {props.title}
      </span>
      {props.children}
    </span>
  )
}


export default CatGroup;