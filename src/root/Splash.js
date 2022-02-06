import React from 'react';
import Social from './Social';
function Splash() {
  return (
    <div>
      <div className="splash">
        <div>
          <h1> Welcome to Gaming Decoded! </h1>
        </div>
        <p className="photo-attributes">Photo by <a href="https://unsplash.com/@_everaldo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Everaldo Coelho</a> on <a href="https://unsplash.com/@_everaldo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
        <div className="three-columns">
          <div className="social-media-box">
            <div className="social-media-header">Social Media</div><br></br>
            <Social url="https://www.linkedin.com/in/chesbro-jr/" social="LinkedIn" handle="Lawrence Chesbro Jr"/>
            <Social url="https://blog.gamingdecoded.org/" social="Blog" handle="Lawrence Chesbro Jr" />
            <Social url="https://twitter.com/GamingDecoded" social="Twitter" handle="@GamingDecoded" />
            <Social url="https://www.youtube.com/channel/UCNqDMQ-o3_iGszqxdDq_ldA" social="YouTube" handle="GamingDecodedLar" />
          </div>
          <div className="portfolio-box"><div className="portfolio-box-header">Portfolio</div><br></br>
          <Social url="https://lrd134.github.io/basic-game/" social="Basic Game" handle="Play Here" />
          <Social url="https://gdc-forums.herokuapp.com/" social="Mock Forums" handle="Explore Forums Here" />
          <Social url="https://youtu.be/8cWGCMXNhZw" social="Mock Cryptocurrency Exchange" handle="Watch Demo Here" />
          </div>
          <div className="etc-box">
            <div className="etc-box-header">More Info</div>
            <Social url="" social="We are happy to have you hear!" handle="Welcome!" />
          </div>
        </div>
        <div>
          {/* Put something interesting here that will be interactive or attention grabbing.
          */}
        </div>
        <div className="footer">
          {/* Put information here, this will have something like about me, our mission, what I want to achieve, etc */}
        </div>
      </div>
    </div>
  )
}

export default Splash;