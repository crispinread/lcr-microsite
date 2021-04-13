import React from 'react';

import Layout from '../components/Layout';
import Joana from '../assets/images/joana.jpeg';
import logo from '../assets/images/TCG-logo-brackets.svg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>Joana</h1>
        <div className="flex-container">
          <div className="image-container">
            <span className="image main">
              <img src={Joana} alt="" />
            </span>
          </div>
          <div className="socials-container">
            <h2>Click the icons to follow Joana's work</h2>
            <div className="social-icons">
              <a href=""><i class="fa fa-codepen"></i></a>
              <a href="https://twitter.com/JoanaThePita" target="_blank" rel="noreferrer"><i class="fa fa-twitter"></i></a>
              <a href="https://github.com/JoanaPita"  target="_blank" rel="noreferrer"><i class="fa fa-github"></i></a>
            </div>
          </div>
        </div>
        <div className="content">
          <h2>In Joana's Own Words</h2>
          <p>
          Hi, I'm Joana Pita, a beginner front-end developer, passionate about web development 
          and design. I have a Bachelor in Graphic and Multimedia Design and was always most 
          interested in designing for the web. I have some knowledge of UI and UX design and 
          thought it would be a great asset to learn how to code. So I started learning web 
          development after enrolling into a Coders Guild bootcamp and immediately feel in love 
          with coding. Problem solving has always been a great motivator and lucky me, there are 
          plenty of problems to solve while you code. I'm fascinated by all the ideas that can 
          come to life with just a bit of html & css and I’m looking for opportunities that 
          enable me to further expand my knowledge in web development in order to cultivate a 
          strong career as a front-end developer. I’m currently learning JS with Free Code Camp 
          and doing a few small projects in order to implement the things they teach. I just 
          started the #100daysofcode challenge on twitter to keep me motivated and to get some 
          feedback on these projects. I’m most comfortable with html and css, but keep learning 
          new ways to write better code. My first html and css website was my portfolio, and I'm 
          keeping it updated with new projects.
          </p>
          <h2>
            Click to view Joana's Bio
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
