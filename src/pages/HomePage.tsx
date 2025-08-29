import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <section className="hero-section">
          <div className="container">
            <h1 className="hero-title">Protect Your Voice in the GenAI Era</h1>
            <p className="hero-subtitle">
              Today, just seconds of your voice are enough for GenAI to clone it and make you say anything. 
              We safeguard your most valuable asset — your voice — with cutting-edge audio protection technology.
            </p>
          </div>
        </section>

        <section className="highlight-section">
          <div className="container">
            <div className="highlight-card">
              <h2 className="highlight-title">Empowering Everyone in the Audio Ecosystem</h2>
              <p className="highlight-text">
                With every piece of audio carrying a trackable identity. 
                Creators are protected from voice theft, consumers can verify authentic media sources, 
                and platforms can prevent misuse—powered by our technology.
              </p>
              <div className="highlight-benefits">
                <div className="benefit-item">
                  <span className="benefit-icon">🎨</span>
                  <span className="benefit-text">Creators: Fear-free from voice theft</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span className="benefit-text">Consumers: Verify authentic sources</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🏢</span>
                  <span className="benefit-text">Platforms: Prevent content misuse</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="container">
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h2>Invisible Audio Watermarking</h2>
              <p>
                The Audionyx watermarking technology embeds robust, invisible markers into every voice and sound, 
                ensuring creators can prove ownership, stop AI misuse, and protect their digital identity with confidence.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h2>Advanced Audio Database</h2>
              <p>
                Our audio database powers next-generation multi-media indexing by storing unique, traceable identifiers 
                for every piece of content. This enables fast, accurate search and verification across massive libraries, 
                ensuring creators and platforms can reliably track, organize, and protect their audio assets at scale.
              </p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-buttons">
              <div className="cta-item">
                <Button 
                  variant="primary" 
                  href="https://aowl.app" 
                  external={true}
                  className="cta-button"
                >
                  <img 
                    src="/images/aowl-logo.003.png" 
                    alt="AOWL" 
                    className="button-logo"
                  />
                  <span>Sign up / Login<br /> and protect your audio</span>
                </Button>
                <p className="cta-description">Experience AOWL technology</p>
              </div>
              
              <div className="cta-item">
                <Link to="/technology">
                  <Button 
                    variant="secondary"
                    className="cta-button"
                  >
                    Learn more
                  </Button>
                </Link>
                <p className="cta-description">Discover our technology</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;