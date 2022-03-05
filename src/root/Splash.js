import blogIco from '../media/icons/Medium-18.png';
import twitterIco from '../media/icons/Twitter-16.png';
import linkedInIco from '../media/icons/Linkedin-15.png';
import youTubeIco from '../media/icons/Youtube-17.png';
import docIco from '../media/icons/Document-21.png';
import gitHubIco from '../media/icons/Document-13.png';
import selfPortrait from '../me_temp.jpg';
import React from 'react';
import Social from './Social';
import YoutubeEmbed from './YoutubeEmbed';
import './social.css';
function Splash() {
  return (
    <div>
      <div className="splash">
        <div>
          <h1> Welcome to Gaming Decoded! </h1>
        </div>
        <h6 id="ps">Gaming Decoded is intended to be an organization that will help teach video game development. Created by Lawrence Chesbro, Jr. he plans to use this website to showcase his capabilties.</h6>
        <div className="photo-left-caption"><h3>Currently Lawrence Chesbro, Jr. is a Software Engineer looking to obtain a Frontend React Position. Lawrence is confident in Ruby, Ruby on Rails; however, he prefers programming in React and JavaScript. </h3></div>
        <img className="photo-left" src={selfPortrait} alt="Lawrence Chesbro, Jr. looking off in the distance towards Java Lake."></img>
        <div className="three-columns">
          <div className="social-media-box">
            <div className="social-media-header">Social Media</div><br></br>
            <div className="socials">
              <Social url="https://www.linkedin.com/in/chesbro-jr/" social="LinkedIn" altTxt="Lawrence Chesbro Jr's LinkedIn" icon={linkedInIco} />
              <Social url="https://blog.gamingdecoded.org/" social="Blog" altTxt="Lawrence Chesbro Jr's Blog" icon={blogIco}/>
              <Social url="https://twitter.com/GamingDecoded" social="Twitter" altTxt="@GamingDecoded on Twitter" icon={twitterIco}/>
              <Social url="https://www.youtube.com/channel/UCNqDMQ-o3_iGszqxdDq_ldA" social="YouTube" altTxt="Lawrence Chesbro Jr' YouTube Channel" icon={youTubeIco} />
            </div>
          </div>
          <div className="portfolio-box"><div className="portfolio-box-header">Portfolio</div><br></br>
            <Social url="https://lrd134.github.io/basic-game/" social="Basic Game" altTxt="Play a Basic Game Here" icon={docIco} />
            <Social url="https://gdc-forums.herokuapp.com/" social="Mock Forums" altTxt="Explore the Forums Here" icon={docIco} />
            <Social url="https://youtu.be/8cWGCMXNhZw" social="Mock Cryptocurrency Exchange" altTxt="Watch a Demo Here" icon={docIco} />
            <Social url="https://github.com/Lrd134" social="GitHub" altText="Lawrence Chesbro Jr's GitHub" icon={gitHubIco} />
          </div>
          <div className="etc-box">
            <div className="etc-box-header">More Info</div>
            <Social url="" social="We are happy to have you hear!" altTxt="Welcome!" />
          </div>
        </div>
        <div>
          <YoutubeEmbed embedId="8cWGCMXNhZw" />
        </div>
        <div className="footer">
          {/* Put information here, this will have something like about me, our mission, what I want to achieve, etc */}
        </div>
      </div>
    </div>
  )
}

export default Splash;