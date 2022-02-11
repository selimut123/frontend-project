import React from 'react';

import NavLinks from '../NavLinks/NavLinks';
import MainHeader from '../MainHeader/MainHeader';
import './MainNavigation.css';

function MainNavigation(props) {
    
    return (
      <React.Fragment>
        <MainHeader>
          <h1 className="main-navigation__title">GO-BLOG</h1>
          <nav className="main-navigation__header-nav">
            <NavLinks />
          </nav>
        </MainHeader>
      </React.Fragment>
    );

}

export default MainNavigation;