import React, { Component } from 'react';
import './Footer.css';

interface FooterState {
  copied: boolean;
}

class Footer extends Component<{}, FooterState> {
  state: FooterState = {
    copied: false
  };

  copyEmail = () => {
    navigator.clipboard.writeText('info@audionyx.ai');
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
    }, 2000);
  };

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
              <button 
                type="button"
                className="email-button"
                onClick={this.copyEmail}
                title="Click to copy email address"
              >
                info@audionyx.ai
                {this.state.copied && <span className="copied-tooltip">Copied!</span>}
              </button>
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