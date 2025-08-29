import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TechnologyPage from './pages/TechnologyPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/technology" element={<TechnologyPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;