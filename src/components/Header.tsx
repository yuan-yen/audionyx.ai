import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <Link to="/" className="logo-link">
            <img 
              src="/images/audionyx-logo-1.png" 
              alt="Audionyx" 
              className="logo"
            />
            <span className="company-name">Audionyx</span>
          </Link>
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/technology" className="nav-link">Technology</Link>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;