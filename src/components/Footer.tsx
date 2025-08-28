import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Audionyx</h3>
              <p>Protecting your voice in the digital age</p>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>info@audionyx.ai</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {currentYear} Audionyx. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;