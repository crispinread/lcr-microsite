import React from 'react';

import Layout from '../components/Layout';
import Rebecca from '../assets/images/rebecca.jpeg';
import logo from '../assets/images/TCG-logo-brackets.svg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>Rebecca</h1>
        <div className="flex-container">
          <div className="image-container">
            <span className="image main">
              <img src={Rebecca} alt="Rebecca" />
            </span>
          </div>
          <div className="socials-container">
            <h2>Click the icons to follow Rebecca's work</h2>
            <div className="social-icons">
              <a href="https://codepen.io/collection/nozkLY"><i class="fa fa-codepen"></i></a>
            </div>
          </div>
        </div>
        <div className="content">
          <h2>In Rebecca's Own Words</h2>
          <p>
          I'm very interested in working with various programming languages like html, css and
          javascript in the future. Before this course I picked up bits of html and css knowledge 
          from fixing issues on the jcink forums I run. During the course, I found the sessions 
          focused on these the most fascinating and I really enjoyed building on that knowledge.
          As of now I am playing around with the stuff we've learned. I'm also writing blog posts 
          about different subjects covered on the course. I've made a mock up web page separate to 
          the tasks we were assigned. I'm also building on that knowledge with FreeCodeCamp as well 
          as Codepip and apps like Mino, so I'm always putting things into practice.
          </p>

          <div className='videoContainer'>
            <h3>Learn about Rebecca's Coding Journey!</h3>
            <iframe src="https://player.vimeo.com/video/547883382?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen className="videostyle" title="Profile Video"></iframe>
          </div>
        </div>
      </div>
      <div className="cta-bg">
        <div className="cta-banner">
            <div className="logo"><img src={logo} alt="The Coders Guild Logo"/></div>
            <div className="content"><p>If you would like to interview this candidate or would like to know more about our apprenticeships and other training schemes, please get in touch with the form below.</p></div>
          </div>
      </div>
    </div>
    <script src="https://player.vimeo.com/api/player.js"></script>
  </Layout>
);

export default IndexPage;
