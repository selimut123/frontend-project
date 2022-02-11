import React from "react";
import { NavLink } from "react-router-dom";

import './NavLinks.css';

function NavLinks(props){
    return (
      <ul className="nav-links">
        <li>
          <NavLink to="/" exact>
            BLOG
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/blog" exact>
            MY BLOG
          </NavLink>
        </li>
        <li>
          <NavLink to="/write" exact>
            WRITE
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/login" exact>
            LOGIN
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/register" exact>
            REGISTER
          </NavLink>
        </li>
      </ul>
    );
};

export default NavLinks;