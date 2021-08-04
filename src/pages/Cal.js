import React from 'react';

import Layout from '../components/Layout';
// import cal from '../assets/images/cal.jpeg';
import logo from '../assets/images/TCG-logo-brackets.svg';
import { Icon, InlineIcon } from '@iconify/react';
import leetcodeIcon from '@iconify-icons/simple-icons/leetcode';
import Cal from '../assets/images/cal.jpeg';

const IndexPage = () => (
  <Layout>
      <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
    <div id="main">
      <div className="inner">
        <h1>Cal</h1>
        <div className="flex-container">
          <div className="image-container">
            <span className="image main">
              <img src={Cal} alt="Cal" />
            </span>
          </div>
          <div className="socials-container">
            <h2>Click the icons to follow Cal's work</h2>
            <div className="social-icons">
              <a href=""><i class="fa fa-codepen"></i></a>
              <a href=""><i class="fa fa-twitter"></i></a>
              <a href=""><i class="fa fa-github"></i></a>
              <a href=""><i class="fa fa-gitlab"></i></a>
              <a href=""><Icon icon={leetcodeIcon} /></a>
            </div>
          </div>
        </div>
        <div className="content">
          <h2>In Cal's Own Words</h2>
          <p>The tech industry appeals to me as I have experienced and witnessed how technology can change and improve quality of life in terms of interconnectivity,
              ease of access to information and a plethora of different factors all of which I am interested in.</p>
          <p>I have made a lot of progression recently strengthening my skills through the Coders Guild Bootcamp where I was able to build a personal profile site as
              well as a blog site to be used as a showcase for my projects similar to a portfolio. This helped better my skills in source control and git management</p>
          <p>I have also been actively progressing through coding tasks on Leetcode to learn more efficient ways to code regarding runtime and memory usage.
             Through Leetcode I have learnt new skills and new methods of coding to help ensure the space and time complexity of my solutions are kept to a minimum.</p>
          <p>I enjoy working on larger projects with a team using an agile approach that uses multiple coding languages and different areas that utilise new coding
             strategies. These projects are thought-provoking and enjoyable to me.</p>
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
