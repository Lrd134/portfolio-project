import React from 'react';
function Splash() {
  return (
    <div>
      <div className="splash">
        <div>
          <h1> Welcome to Gaming Decoded! </h1>
        </div>
        <p className="photo-attributes">Photo by <a href="https://unsplash.com/@_everaldo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Everaldo Coelho</a> on <a href="https://unsplash.com/@_everaldo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
        <div className="three-columns">
          <div className="social-media-box">Please check my socials!</div>
          <div className="portfolio-box">This will have portfolio info</div>
          <div className="etc-box">etc</div>
        </div>
      </div>
    </div>
  )
}

export default Splash;