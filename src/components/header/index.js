import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logoutUser } from "../../actions";

import "./header.css";


const Header = (props) => {
  let srcUrl =
    (props.user && props.user.picture && props.user.picture.large) ||
    "https://i.stack.imgur.com/UJZft.png";
  
  return (
    <header className="header">
      <div className="header-nav">
        <nav className="header__nav">
          <ul className="nav">
            <li className="nav__item">
              <Link className="nav__link" to="/">
                General
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/contacts">
                Contacts
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav__item">
              <span role="img" className="" onClick={() => props.logoutUser()}>
              
                <img className="prof-ava" src={srcUrl}/>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};


  export default connect((state) => ({
    user: state.info.user
  }),
    { logoutUser }
  )(Header);