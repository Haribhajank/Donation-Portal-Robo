import React, { useState, useEffect } from 'react';
import './App.css'

function App() {

  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
    <nav className="navbar">
      <div className="navbar-left">Robotics IITG</div>
      <div className="navbar-center">Payment Portal</div>
      <div className="navbar-right"><button className='contact-button'>Contact Us</button></div>
    </nav>

    <div className="donation-portal">
      <div className="line1">Robotics Club</div>
      <div className="line2">Donation Portal</div>
    </div>

    <div className="main-content">
        <div className="donate-box">
          <div className="year">{currentYear}</div>
          <button className="donate-button">Donate Now</button>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, arcu eget convallis vehicula, metus turpis convallis odio, vel rutrum eros quam in libero.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
