import React from 'react';
import CatGroup from './CatGroup';
import Category from './Category';
import './forums.css';
function ForumContainer() {
  return (
    <div>
      <h1>Welcome to the forums!<br></br>
      Construction to be finished May 31st.</h1>
      <CatGroup key="general" title="General">  
        <Category key="ot" title="Off Topic"/>
        <Category key="intros" title="Introductions"/>
        <Category key="fd" title="Friendly Discussions"/>
      </CatGroup>
      <CatGroup key="programming" title="Programming"/>

    </div>
  )
}

export default ForumContainer;