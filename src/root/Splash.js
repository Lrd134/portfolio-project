import blogIco from '../media/icons/Medium-18.png';
import twitterIco from '../media/icons/Twitter-16.png';
import linkedInIco from '../media/icons/Linkedin-15.png';
import youTubeIco from '../media/icons/Youtube-17.png';
import docIco from '../media/icons/Document-21.png';
import gitHubIco from '../media/icons/Document-13.png';
import rubyIco from '../media/icons/ruby-icon.png';
import railsIco from '../media/icons/rails-icon.png';
import reactIco from '../media/icons/react-icon.png';
import webDevIcos from '../media/icons/webdev-icons.png';
import gitIco from '../media/icons/git-icon.png';
import selfPortrait from '../me_temp.jpg';
import React from 'react';
import Social from './Social';
import YoutubeEmbed from './YoutubeEmbed';
import './splash.css';
function Splash() {
  return (
    <div>
      <div className="splash">
        <div>
          <h1> Welcome to Gaming Decoded! </h1>
        </div>
        <h6 id="ps">Gaming Decoded is intended to be an organization that will help teach video game development. Created by Lawrence Chesbro, Jr. he plans to use this website to showcase his capabilties.</h6>
        <span className="about"><strong>About Me</strong><br></br></span>
          <span className="left-text-point education"> Lawrence Chesbro Jr's Education:</span>
          <span className="right-text-point education-text">Jan. 2022 Flatiron School</span>
          <span className="left-text-point goals">Looking For and Accepting:</span>
          <span className="right-text-point goals-text">Group Project Collaborations<br></br>
          Entry-Level Frontend Job Offers<br></br>
          </span>
          <span className="left-text-point background">Customer Service Background:</span><span className="right-text-point background-text">Will bring friendly and direct communication to the team.</span>
        <YoutubeEmbed embedId="8cWGCMXNhZw" />
        <div className="photo-left-caption"><h3><span className="right-s9">Current Goal:</span><br></br><span>Frontend React Position</span><br></br><span className="right-lowres right-s9">Languages:<span><br></br>
          <span className="img-right-s9">
          <a rel="noreferrer" href="https://ruby-doc.org/" alt="Ruby Documentation" target="_blank"><img height="60px" width="60px" src={rubyIco} alt="Ruby Programming Language"/></a>
          <a rel="noreferrer" href="https://guides.rubyonrails.org/" alt="Rails Documentation" target="_blank"><img height="60px" width="60px" src={railsIco} alt="Ruby on Rails Framework"/></a>
          <span className="img-right-720">
          <a style={{
            marginLeft: "7px",
            textDecoration: "none"
          }} rel="noreferrer" href="https://git-scm.com/doc" alt="Git Documentation" target="_blank"><img height="60px" width="60px" src={gitIco} alt="Git CLI"/> </a>
          <a rel="noreferrer" href="https://reactjs.org/docs/getting-started.html" alt="React Documentation" target="_blank"><img height="60px" width="60px" src={reactIco} alt="React Framework"/></a><br></br>
          <a rel="noreferrer" href="https://developer.mozilla.org/" alt="MDN Web Documentation" target="_blank"><img height="90px" width="180px" src={webDevIcos} alt="HTML5, CSS, and JavaScript ES6"/></a> </span></span></span></span></h3></div>
        <img className="photo-left" src={selfPortrait} alt="Lawrence Chesbro, Jr. looking off in the distance towards Java Lake."></img>

        <div className="three-columns">
          <div className="social-media-box">
            <div className="social-media header">Social Media</div><br></br>
            <div className="socials">
              <Social url="https://www.linkedin.com/in/chesbro-jr/" social="LinkedIn" altTxt="Lawrence Chesbro Jr's LinkedIn" icon={linkedInIco} />
              <Social url="https://blog.gamingdecoded.org/" social="Blog" altTxt="Lawrence Chesbro Jr's Blog" icon={blogIco}/>
              <Social url="https://twitter.com/GamingDecoded" social="Twitter" altTxt="@GamingDecoded on Twitter" icon={twitterIco}/>
              <Social url="https://www.youtube.com/channel/UCNqDMQ-o3_iGszqxdDq_ldA" social="YouTube" altTxt="Lawrence Chesbro Jr' YouTube Channel" icon={youTubeIco} />
            </div>
          </div>
          <div className="portfolio-box"><div className="portfolio-box header">Portfolio</div><br></br>
            <Social url="https://lrd134.github.io/basic-game/" social="Basic Game" altTxt="Play a Basic Game Here" icon={docIco} />
            <Social url="https://gdc-forums.herokuapp.com/" social="Mock Forums" altTxt="Explore the Forums Here" icon={docIco} />
            <Social url="https://youtu.be/8cWGCMXNhZw" social="Mock Exchange" altTxt="Watch a Demo Here" icon={docIco} />
            <Social url="https://github.com/Lrd134" social="GitHub" altText="Lawrence Chesbro Jr's GitHub" icon={gitHubIco} />
          </div>
          <div className="etc-box">
            <div className="etc-box-header">More Info</div>
            <Social url="" social="I are happy to have you hear!" altTxt="Welcome!" />
          </div>
        </div>
        <div>
        </div>
        <div className="footer">
          {/* Put information here, this will have something like about me, our mission, what I want to achieve, etc */}
        </div>
      </div>
    </div>
  )
}

export default Splash;