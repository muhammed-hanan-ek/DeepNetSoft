import React from 'react';
import Logo from '../images/Logo.png';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark" style={{ height: '80px', fontFamily: 'Oswald, sans-serif' }}>
        <div className="container-fluid">
          <NavLink
            className="navbar-brand d-flex ms-5"
            to="/"
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: '20px',
              fontWeight: '400',
              marginTop: '80px',
            }}
          >
           
                <img id='logo' src={Logo} alt="Logo" />
                <span className="mt-2 text-light name">
                  <span style={{ color: '#0796EF' }} className="me-2">
                    DEEP
                  </span>
                  NET <br />
                  <span style={{ color: '#857878' }}>SOFT</span>
                </span>
          
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto ">
              <NavLink
                className="nav-link nav-item"
                to="/"
              >
                HOME
              </NavLink>
              <NavLink
                className="nav-link nav-item"
                to="/menu"
               
              >
                MENU
              </NavLink>
              <NavLink
                className="nav-link nav-item"
                to="/reservation"
               
              >
                MAKE A RESERVATION
              </NavLink>
              <a
                className="nav-link nav-item"
                href='#footer'
               
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
