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
import React, { useState } from 'react';
import Social from './Social';
import YoutubeEmbed from './YoutubeEmbed';
import './splash.css';
function Splash() {
  const [socialClicked, setSocialClicked] = useState(false)
  const [portfolioClicked, setPortfolioClicked] = useState(false)
  const changeSocialClicked = event => {
    setSocialClicked(!socialClicked);
  }
  const changePortfolioClicked = event => {
    setPortfolioClicked(!portfolioClicked);
  }
  return (
    <div>
      <div className="splash">
        <div className="three-columns">
          
          <div className="social-media-box">
            {socialClicked ?
            <div className="socials" onClick={changeSocialClicked}>
              <Social url="https://www.linkedin.com/in/chesbro-jr/" social="LinkedIn" altTxt="Lawrence Chesbro Jr's LinkedIn" icon={linkedInIco} />
              <Social url="https://blog.gamingdecoded.org/" social="Blog" altTxt="Lawrence Chesbro Jr's Blog" icon={blogIco}/><br></br>
              <Social url="https://twitter.com/GamingDecoded" social="Twitter" altTxt="@GamingDecoded on Twitter" icon={twitterIco}/>
              <Social url="https://www.youtube.com/channel/UCNqDMQ-o3_iGszqxdDq_ldA" social="YouTube" altTxt="Lawrence Chesbro Jr' YouTube Channel" icon={youTubeIco} />
            </div> : <div className="hidden socials" onClick={changeSocialClicked}><div className="hidden text">Social Media »</div></div>
          }
          </div>
          
          <div className="portfolio-box" onClick={changePortfolioClicked}>
          {portfolioClicked ?
            <div className="portfolio">
            <Social url="https://lrd134.github.io/basic-game/" social="Basic Game" altTxt="Play a Basic Game Here" icon={docIco} />
            <Social url="https://gdc-forums.herokuapp.com/" social="Mock Forums" altTxt="Explore the Forums Here" icon={docIco} /><br></br>
            <Social url="https://youtu.be/8cWGCMXNhZw" social="Mock Exchange" altTxt="Watch a Demo Here" icon={docIco} />
            <Social url="https://github.com/Lrd134" social="GitHub" altText="Lawrence Chesbro Jr's GitHub" icon={gitHubIco} />
            </div> : <div className="hidden portfolio" onClick={changePortfolioClicked}><div className="hidden text">My Projects »</div></div>
          }
          </div>
        </div>
        <div>
        </div>
        

        <YoutubeEmbed embedId="8cWGCMXNhZw" />
        {/* <img className="portrait" src={selfPortrait} alt="Lawrence Chesbro, Jr. looking off in the distance towards Java Lake."></img> */}
        <h1 className="goal">Current Goal</h1><span className="goal">Frontend React Position</span>
        <h1 className="languages">Languages</h1>
        <span className="languages">
          <a rel="noreferrer" href="https://ruby-doc.org/" alt="Ruby Documentation" target="_blank"><img height="60px" width="60px" src={rubyIco} alt="Ruby Programming Language"/></a>
          <a rel="noreferrer" href="https://guides.rubyonrails.org/" alt="Rails Documentation" target="_blank"><img height="60px" width="60px" src={railsIco} alt="Ruby on Rails Framework"/></a>
          <a rel="noreferrer" href="https://git-scm.com/doc" alt="Git Documentation" target="_blank"><img height="60px" width="60px" src={gitIco} alt="Git CLI"/> </a>
          <a rel="noreferrer" href="https://reactjs.org/docs/getting-started.html" alt="React Documentation" target="_blank"><img height="60px" width="60px" src={reactIco} alt="React Framework"/></a><br></br>
          <a className="mdn" rel="noreferrer" href="https://developer.mozilla.org/" alt="MDN Web Documentation" target="_blank"><img height="90px" width="180px" src={webDevIcos} alt="HTML5, CSS, and JavaScript ES6"/></a> </span>

        <div className="footer">
        <span className="about"><strong>About Me</strong><br></br></span>
          <span className=""> Lawrence Chesbro Jr's Education:</span>
          <span className="">Jan. 2022 Flatiron School</span>
          <span className="">Looking For and Accepting:</span>
          <span className="">Group Project Collaborations<br></br>
        <a href="mailto:lches3200@gmail.com?subject=Just%20Wanted%20to%20Connect%20About" rel="noreferrer" target="_blank">Email Me</a>
          Entry-Level Frontend Job Offers<br></br>
          </span>
          <span className="">Customer Service Background:</span><span className="">Will bring friendly and direct communication to the team.</span>
          {/* Put information here, this will have something like about me, our mission, what I want to achieve, etc */}
        </div>
      </div>
    </div>
  )
}

export default Splash;