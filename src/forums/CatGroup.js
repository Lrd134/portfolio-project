import React from 'react';
import Category from './Category';
function CatGroup({title}) {
  return (
    <span className={`cat-group-box`}>
      <span className={`cat-group-title ${title}`}>
        {title}
      </span>
    </span>
  )
}


export default CatGroup;