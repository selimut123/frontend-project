import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../../context/auth-context";
import './NavLinks.css';

function NavLinks(){
  const auth = useContext(AuthContext);
    return (
      <ul className="nav-links">
        <li>
          <NavLink to="/" exact>
            BLOG
          </NavLink>
        </li>
        {auth.isLoggedIn && (
          <li>
            <NavLink to={`/user/blog/${auth.userId}`} exact>
              MY BLOG
            </NavLink>
          </li>
        )}
        {auth.isLoggedIn && (
          <li>
            <NavLink to="/write" exact>
              WRITE
            </NavLink>
          </li>
        )}
        {!auth.isLoggedIn && (
          <li>
            <NavLink to="/user/login" exact>
              LOGIN
            </NavLink>
          </li>
        )}
        {!auth.isLoggedIn && (
          <li>
            <NavLink to="/user/register" exact>
              REGISTER
            </NavLink>
          </li>
        )}
        {auth.isLoggedIn && (
          <li>
            <button onClick={auth.logout}>LOGOUT</button>
          </li>
        )}
      </ul>
    );
};

export default NavLinks;