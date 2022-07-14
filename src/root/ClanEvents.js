import React from 'react';
import pluginHubLocation from './pluginHubLocation.png';
import clanEventsInHub from './clanEventsInHub.png';
import clanEventsConfigure from './clanEventsConfigure.png';
import keyInputLocations from './keyInputLocations.png';
import './clanEvents.css';
function RuneScapeClanEvents() {
  return (
    <div className="clan-events">
      <h1> Thanks for joining DecodedScape! </h1>

      <h3>We have a great plugin called 
        {" "}<a href="https://github.com/cmsu224/clan-events" target="blank">Clan Events</a> that helps you keep track of
         track Skill of the Week and Boss of the Week </h3>
      <div className="instructions">
        <div className="step">
          <h2>Step 1: Locate the Plugin Hub </h2>
          <img src={pluginHubLocation}/>
        </div><br></br><br></br>
        <div className="step">
          <h2>Step 2: Open the Plugin Hub then<br></br> Search Clan Events</h2>
          <img src={clanEventsInHub}/>
        </div>
        <div className="step">
          <h2>Step 3: Open the Clan Events Configuration</h2>
          <img src={clanEventsConfigure}/>
        </div>
        </div>

        <div className="step">
          <h2>Step 4: Input The <span id="blue-text">Google API Key</span>, and <span id="red-text">Google Document ID</span>.<br></br>
            <span id="blue-text">Google API Key</span>: AIzaSyDyEk74wnojfRHJLjHWzczPcyzslKf6Ce4<br></br>
            <span id="red-text">The Google Document ID</span>: 1wf_9fKdEg1Ff_BdDH9lxaWCTDP7q4hHqwKgr2V0TzOo <br></br></h2>
          <img src={keyInputLocations} />
      </div>

    </div>
  )
};


export default RuneScapeClanEvents;