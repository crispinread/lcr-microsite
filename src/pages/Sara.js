import React from 'react';

import Layout from '../components/Layout';
import cassietech from '../assets/images/cassie-tech.jpg';
import logo from '../assets/images/TCG-logo-brackets.svg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>Cassie</h1>
        <div className="flex-container">
          <div className="image-container">
            <span className="image main">
              <img src={cassietech} alt="" />
            </span>
          </div>
          <div className="socials-container">
            <h2>Click the icons to follow Cassie's work</h2>
            <div className="social-icons">
              <a href=""><i class="fa fa-codepen"></i></a>
              <a href=""><i class="fa fa-twitter"></i></a>
              <a href=""><i class="fa fa-github"></i></a>
            </div>
          </div>
        </div>
        <div className="content">
          <h2>In Cassie's Own Words</h2>
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
            in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis
            sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit
            amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat.
            Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna
            ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien
            risus, commodo eget turpis at, elementum convallis elit. Pellentesque
            enim turpis, hendrerit tristique.
          </p>
          <h2>
            Click to view Cassie's Bio
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
