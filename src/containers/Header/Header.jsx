import React from 'react'
import './header.css'
import ai from '../../assets/ai.png';
function Header() {
  return (
    <div className='bard__header section__padding' id='home'>
      <div className='bard__header-content'>
        <h1 className='gradient__text'><span className='google_blue'>G</span><span className='google_orange'>o</span><span className='google_yellow'>o</span><span className='google_blue'>g</span><span className='google_green'>l</span><span className='google_orange'>e</span> Bard, Unleash Amazing Web Wonders!</h1>
        <p>Google Bard is a large language model from Google AI trained on a massive dataset of text and code. It can generate text, translate languages, write different kinds of creative content, and answer your questions in an informative way Like this text.</p>
        <div className='bard__header-content__input'>
          <input type ='email' placeholder='Your email address'/>
          <button type='button'>Get Started</button>
        </div>
        <div className='bard__header-content__people'>
        </div>
        </div>
      <div className='bard__header-image'>
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header