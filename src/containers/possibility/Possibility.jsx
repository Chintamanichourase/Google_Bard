import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="bard__possibility section__padding" id="possibility">
    <div className="bard__possibility-image">
      <img src={possibilityImage} alt="possibility"/>
    </div>
    <div className="bard__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>As a large language model, Bard is constantly learning and evolving. It can already answer your questions, generate different creative text formats, and translate languages. But as it learns more, it will be able to do even more amazing things.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;