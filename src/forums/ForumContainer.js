import React from 'react';
import CatGroup from './CatGroup';
import Category from './Category';
function ForumContainer() {
  return (
    <div>
      <h1>Welcome to the forums!<br></br>
      Construction to be finished May 31st.</h1>
      <CatGroup key="general" title="general">  
        <Category key="ot" title="Off Topic"/>
        <Category key="intros" title="Introductions"/>
        <Category key="fd" title="Friendly Discussions"/>
      </CatGroup>
      <CatGroup key="programming" title="programming"/>

    </div>
  )
}

export default ForumContainer;