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
            </div> : <div className="hidden socials" onClick={changeSocialClicked}><div className="hidden text">Social Media<br></br> »</div></div>
          }
          </div>
          
          <div className="portfolio-box" onClick={changePortfolioClicked}>
          {portfolioClicked ?
            <div className="portfolio">
            <Social url="https://lrd134.github.io/basic-game/" social="Basic Game" altTxt="Play a Basic Game Here" icon={docIco} />
            <Social url="https://gdc-forums.herokuapp.com/" social="Mock Forums" altTxt="Explore the Forums Here" icon={docIco} /><br></br>
            <Social url="https://youtu.be/8cWGCMXNhZw" social="Mock Exchange" altTxt="Watch a Demo Here" icon={docIco} />
            <Social url="https://github.com/Lrd134" social="GitHub" altText="Lawrence Chesbro Jr's GitHub" icon={gitHubIco} />
            </div> : <div className="hidden portfolio" onClick={changePortfolioClicked}><div className="hidden text">My Projects<br></br> »</div></div>
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
          <a className="mdn" rel="noreferrer" href="https://developer.mozilla.org/" alt="MDN Web Documentation" target="_blank"><img height="90px" width="180px" src={webDevIcos} alt="HTML5, CSS, and JavaScript ES6"/></a>
        </span>
        
        <div className="footer">

        <span className="about"><strong>About Lawrence</strong><br></br></span>
        <div className="education">
          <span className=""> Lawrence Chesbro Jr's Education:</span><br></br>
          <span className="">Jan. 2022 Flatiron School</span>
        </div>
        <div className="search">
          <span className="">Looking For and Accepting:</span><br></br>
          <span className="">Group Project Collaborations</span><br></br>
        <span>Entry-Level Frontend Job Offers</span><br></br>
        </div>
        <div className="bg">
          <span className="">Customer Service Background:</span><br></br><span className="">Will bring friendly and direct communication to the team.</span>
        </div>
        <div className="email">
          Email <br></br>
          <a href="mailto:lches3200@gmail.com?subject=Just%20Wanted%20to%20Connect%20About..." rel="noreferrer" target="_blank">lches3200@gmail.com</a> <br></br>
          <a href="mailto:lches3200@gmail.com?subject=Just%20Wanted%20to%20Connect%20About..." rel="noreferrer" target="_blank">
            <svg className="email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="#2f6fff" d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/>
              </svg>
          </a>
        </div>

          {/* Put information here, this will have something like about me, our mission, what I want to achieve, etc */}
        </div>
      </div>
    </div>
  )
}

export default Splash;