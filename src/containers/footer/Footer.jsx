import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="bard__footer section__padding">
    <div className="bard__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="bard__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="bard__footer-links">
      <div className="bard__footer-links_logo">
        <img src={gpt3Logo} alt="bard_logo" />
        <p>Patchakorn Phomin<br /> All Rights Reserved</p>
      </div>
      <div className="bard__footer-links_div">
        <h4>Links </h4>
        <p>Linkedin <a href="https://www.linkedin.com/in/chintamani-chourase-43964122b/"></a></p>
        <p>Social Media : Insta- disposable_account24</p>
        <p>Twitter : @chintamani22031</p>
      </div>
      <div className="bard__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="bard__footer-links_div">
        <h4>Get in touch</h4>
        <p>chintamanichourase@gmail.com</p>
        <p>8305382740</p>
      </div>
    </div>

    <div className="bard__footer-copyright">
      <p>@2023 Bard. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;