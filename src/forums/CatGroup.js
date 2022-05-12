import React from 'react';
import Category from './Category';
function CatGroup({title}) {
  return (
    <span className={`cat-group-box`}>
      <span className={`cat-group-title ${title}`}>
        {title}
      </span>
      <Category key="ot" title="Off Topic"/>
      <Category key="intros" title="Introductions"/>
      <Category key="fd" title="Friendly Discussions"/>
    </span>
  )
}


export default CatGroup;