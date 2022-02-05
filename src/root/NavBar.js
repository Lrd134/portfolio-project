import React from 'react';

function NavBar() {
  return (
    <div className="navbar">
      <div className="centering">
        <a
          className="linkedin link-layout"
          href="https://www.linkedin.com/in/chesbro-jr/"
          alt="linkedin"
        >
          LinkedIn
        </a>
        <a
          className="instagram link-layout"
          href="https://www.instagram.com/Lrd134/"
          alt="instagram"
        >
          Instagram
        </a>        
        <a
          className="blog link-layout"
          href="https://blog.gamingdecoded.org/"
          alt="blog"
        >
          Blog
        </a>
        <a
          className="Twitter link-layout"
          href="https://twitter.com/GamingDecoded"
          alt="twitter"
        >
          🐦 Twitter 🐦
        </a>
        <a
          className="minecraft link-layout"
          href="https://gamingdecoded.org/minecraft"
          alt="minecraft"
        >
          Minecraft
        </a>
        <a
          className="portfolio link-layout"
          href="https://gamingdecoded.org/portfolio"
          alt="portfolio"
        >
          Portfolio
        </a>
      </div>
    </div>
  )
}

export default NavBar;