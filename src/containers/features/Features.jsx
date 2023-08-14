import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Improving constantly',
    text: ' Google AI is enhancing Bard capabilities to answer questions and generate different creative text formats constantly.',
  },
  {
    title: 'Generate creative text',
    text: 'Bard can generate different creative text formats, like poems, code, scripts, musical pieces, email, letters, etc. It can even translate languages. ',
  },
  {
    title: 'Complete requests thoughtfully',
    text: 'Bard can follow your instructions and complete requests thoughtfully. This means that you can ask it to do things like find a recipe, book a flight, or write a poem.',
  },
  {
    title: 'Ask it anything',
    text: 'Bard answers your questions about the world. It accesses and processes information from Google Search to provide the most up-to-date answers, even if they are challenging or strange.',
  },
];

const Features = () => (
  <div className="bard__features section__padding" id="features">
    <div className="bard__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="bard__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;