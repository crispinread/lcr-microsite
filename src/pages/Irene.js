import React from 'react';

import Layout from '../components/Layout';
import irene from '../assets/images/irene.jpeg';
import logo from '../assets/images/TCG-logo-brackets.svg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>Irene</h1>
        <div className="flex-container">
          <div className="image-container">
            <span className="image main">
              <img src={irene} alt="" />
            </span>
          </div>
          <div className="socials-container">
            <h2>Click the icons to follow Irene's work</h2>
            <div className="social-icons">
              <a href=""><i class="fa fa-codepen"></i></a>
              <a href=""><i class="fa fa-twitter"></i></a>
              <a href=""><i class="fa fa-github"></i></a>
            </div>
          </div>
        </div>
        <div className="content">
          <h2>In Irene's Own Words</h2>
          <p>
          I currently work as a Quality assurance tester and I'm actively trying to learn coding.
          I mainly use freecodecamp to learn html and CSS as I like the structure of their tasks. 
          I'm currently going through the Responsive Web Design tutorials and I'm planning to 
          start the Front End Development Libraries course next as I'm very interested in front end 
          development. I'd love an opportunity to learn even more within a job or apprenticeship.
          </p>
          <h2>
            Click to view Irene's Bio
          </h2>
        </div>
      </div>
      <div className="cta-bg">
        <div className="cta-banner">
            <div className="logo"><img src={logo} alt="The Coders Guild Logo"/></div>
            <div className="content"><p>If you would like to interview this candidate or would like to know more about our apprenticeships and other training schemes, please get in touch with the form below.</p></div>
          </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
