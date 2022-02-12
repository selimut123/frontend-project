import React from "react";

import './Header.css';

function Header(){
    return (
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">WELCOME TO OUR BLOG POSTING WEBSITE</span>
          <span className="headerTitleLg">GO-BLOG</span>
        </div>
        <img
          className="headerImg"
          src="https://webassets.inman.com/wp-content/uploads/2018/03/chicago-trib-building-sawyer-bengtson-unsplash.jpg"
          alt=""
        />
      </div>
    );
}

export default Header;