import React from 'react';

import Layout from '../components/Layout';
import Tom from '../assets/images/tom.jpeg';
import logo from '../assets/images/TCG-logo-brackets.svg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>Tom</h1>
        <div className="flex-container">
          <div className="image-container">
            <span className="image main">
              <img src={Tom} alt="" />
            </span>
          </div>
          <div className="socials-container">
            <h2>Click the icons to follow Tom's work</h2>
            <div className="social-icons">
              <a href="https://codepen.io/tomqpr36/" target="_blank" rel="noreferrer"><i class="fa fa-codepen"></i></a>
              <a href=""><i class="fa fa-twitter"></i></a>
              <a href="https://github.com/Tomqpr36" target="_blank" rel="noreferrer"><i class="fa fa-github"></i></a>
            </div>
          </div>
        </div>
        <div className="content">
          <h2>In Tom's Own Words</h2>
          <p>
          I feel confident in HTML and CSS but I am actively learning Javascript with the view
          to become confident with vanilla Javascript and React! So at the moment I am currently
          working on a course on Scrimba to understand and become confident with Javascript.
          Whilst doing this I am planning and creating my own projects with the HTML and CSS skills
          that I have gained. The first thing that sparked my interest in coding was in school we
          worked on creating a mobile game in Lua. It was a simple space invaders style game and
          then I created a simple HTML and CSS website for a teacher's half term sports business.
          But then due to other commitments I let those skills go dormant. So when I had more time
          at home and less work commitments due to Covid I jumped at the opportunity to relearn and
          improve!
          </p>
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
