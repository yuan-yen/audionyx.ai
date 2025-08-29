import React, { Component } from 'react';
import './TryItSection.css';

class TryItSection extends Component {
  render() {
    return (
      <section className="try-it-section">
        <div className="container">
          <h2 className="try-it-title">Try it!</h2>
          
          <div className="try-it-content">
            <div className="instructions-section">
              <h3>How to Test</h3>
              <ol className="instructions-list">
                <li>Scan the QR code on your phone</li>
                <li>Click 'Detect Watermark' button</li>
                <li>Allow the microphone usage</li>
                <li>Play the demo audio, and bring your phone close to the speaker</li>
              </ol>
            </div>
            <div className="qr-section">
              <img 
                src="/images/aowl_qr_with_logo.png" 
                alt="AOWL QR Code" 
                className="qr-code"
              />
            </div>

            <div className="audio-section">
              <h3>Demo Audio</h3>
              <audio controls className="audio-player">
                <source src="/audio/AOWL_Introduction - watermarked.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>


          </div>
        </div>
      </section>
    );
  }
}

export default TryItSection;