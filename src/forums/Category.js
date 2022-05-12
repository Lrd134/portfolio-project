import React from 'react';

function Category({title}) {
  return (
    <span className={`category-title ${title}`}>
      {title}
    </span>
  )
}

export default Category;