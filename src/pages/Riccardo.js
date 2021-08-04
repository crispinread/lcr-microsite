import React from 'react';

import Layout from '../components/Layout';
// import cal from '../assets/images/cal.jpeg';
import logo from '../assets/images/TCG-logo-brackets.svg';

const IndexPage = () => (
  <Layout>
      <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
    <div id="main">
      <div className="inner">
        <h1>Riccardo</h1>
        <div className="flex-container">
          <div className="image-container">
            <span className="image main">
              {/* <img src={riccardo} alt="Riccardo" /> */}
            </span>
          </div>
          <div className="socials-container">
            <h2>Click the icons to follow Riccardo's work</h2>
            <div className="social-icons">
              <a href="https://codepen.io/Piggun"><i class="fa fa-codepen"></i></a>
              <a href="https://www.linkedin.com/in/riccardo-foti/"><i class="fa fa-linkedin"></i></a>
              <a href="https://github.com/Piggun"><i class="fa fa-github"></i></a>
              <a href="https://piggun.github.io/profile-page/"><i class="fas fa-user"></i></a>
            </div>
          </div>
        </div>
        <div className="content">
          <h2>In Riccardo's Own Words</h2>
          <p>Hi,<br />
            I’m Riccardo, I’ve always loved technology, especially computers, I started assembling computers when I was a child and since then
            I fell in love with these machines and always wanted to learn more about them. That’s why I’ve decided to move my career towards Computer Programming.</p>
            <p>I love making things from scratch, be it a drawing, a web page, a video game, or anything I’m passionate about. This is probably the main reason why 
            I love computer programming, it gives me the tools to create anything I want and shape it exactly the way I want it. The feeling I get from looking back
            at a project that I made is irreplaceable.</p>      
            <p>The Coders Guild bootcamp helped me a lot in learning new and quicker ways of building websites by using “tools” such as JAMStack, Eleventy and 
            frameworks such as Bootstrap; and it also helped me boost my confidence.</p>        
            <p>I have a huge passion for video games, my dream would be to work as a Game developer, and, who knows, maybe one day also make my own game.</p>
            <p>But for now I would love to work as a Front End Developer, in an environment where I can learn new things and improve my skills every day;
            to work alongside other passionate developers who also want to improve day by day.</p>

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
