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