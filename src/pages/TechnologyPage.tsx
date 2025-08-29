import React, { Component } from 'react';
import TryItSection from '../components/TryItSection';
import Button from '../components/Button';
import './TechnologyPage.css';

interface TechFeature {
  title: string;
  information: string;
  icon: string;
}

class TechnologyPage extends Component {
  techFeatures: TechFeature[] = [
    {
      title: "Extremely high key density feature",
      information: "The AOWL encoding algorithm can generate a virtually limitless key space—equivalent to encoding over 6 trillion years of unique audio—with each watermark key embedded in just a brief segment of sound.",
      icon: "🔑"
    },
    {
      title: "Low latency and scalable detection",
      information: "The AOWL watermarking decoder can extract all possible watermark keys simultaneously in under few milliseconds. This exceptional computational efficiency makes it highly portable to edge devices and scalable across platforms, ensuring fast and robust watermark detection anywhere.",
      icon: "⚡"
    },
    {
      title: "Your valuable watermark keys are protected",
      information: "AOWL securely store your watermark keys and transmit them with end-to-end encryption, ensuring that key information remains protected. This prevents data leakage and safeguards against even the most meticulous identity piracy attempts.",
      icon: "🔒"
    }
  ];

  render() {
    return (
      <div className="technology-page">
        <section className="tech-hero">
          <div className="container">
            <h1 className="page-title">Our Technology</h1>
            <p className="page-subtitle">
              Cutting-edge audio protection powered by advanced watermarking algorithms
            </p>
          </div>
        </section>

        <section className="tech-features">
          <div className="container">
            <div className="features-grid">
              {this.techFeatures.map((feature, index) => (
                <div key={index} className="tech-card">
                  <div className="tech-icon">{feature.icon}</div>
                  <h2 className="tech-title">{feature.title}</h2>
                  <p className="tech-info">{feature.information}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="tech-details">
          <div className="container">
            <div className="detail-section">
              <h2>How It Works</h2>
              <div className="workflow">
                <div className="workflow-step">
                  <div className="step-number">1</div>
                  <h3>Embed</h3>
                  <p>Our technology seamlessly embeds unique watermarks into audio content without affecting quality</p>
                </div>
                <div className="workflow-step">
                  <div className="step-number">2</div>
                  <h3>Protect</h3>
                  <p>Watermark persist through compression, samplerate re-sampling, and audio re-recording</p>
                </div>
                <div className="workflow-step">
                  <div className="step-number">3</div>
                  <h3>Verify</h3>
                  <p>Instantly detect and verify ownership across any platform or device</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TryItSection />

        <section className="tech-cta-section">
          <div className="container">
            <div className="tech-cta-content">
              <Button 
                variant="primary" 
                href="https://aowl.app" 
                external={true}
                className="tech-cta-button"
              >
                <img 
                  src="/images/aowl-logo.003.png" 
                  alt="AOWL" 
                  className="button-logo"
                />
                <span>Sign up / Login<br /> and protect your audio</span>
              </Button>
              <p className="tech-cta-description">Start watermarking your audio content now</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default TechnologyPage;