import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const {user,loginWithRedirect}=useAuth0();
  console.log("CURRENT USER",user);
  return (
    <div className="bard__navbar">
      <div className="bard__navbar-links">
        <div className="bard__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="bard__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#bard">What is Bard?</a></p>
          <p><a href="#possibility">Google</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="bard__navbar-sign">
        <p>Sign in</p>
        <button type="button" onClick={()=>loginWithRedirect()}>Sign up</button>
      </div>
      <div className="bard__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="bard__navbar-menu_container scale-up-center">
          <div className="bard__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#bard">What is Bard?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="bard__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;