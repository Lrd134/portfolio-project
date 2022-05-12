import React from 'react';
import CatGroup from './CatGroup';
function ForumContainer() {
  return (
    <div>
      <h1>Welcome to the forums!<br></br>
      Construction to be finished May 31st.</h1>
      <CatGroup key="general" title="general"/>
      <CatGroup key="programming" title="programming"/>

    </div>
  )
}

export default ForumContainer;