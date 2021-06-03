import React from 'react';

import Layout from '../components/Layout';

import lcrcalogo from '../assets/images/lcrca-logo.jpeg';
import dfelogo from '../assets/images/Department_for_Education.png';
import Tom from '../assets/images/tom.jpeg';
import Rebecca from '../assets/images/rebecca.jpeg';
import Joana from '../assets/images/joana.jpeg';
import Irene from '../assets/images/irene.jpeg';


import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <header>
          <h1>
          Looking to expand your dev team? Thinking about taking on an apprentice developer?
            <br />
          </h1>
          <p>
          All these people have already been trained by us on an 8 week intensive digital skills bootcamp funded by the Dept for Education through Liverpool City Region
          </p>

          <div className="lcrcaLogo">
            <img src={lcrcalogo} alt="LCRCA Logo"/>
          </div>
          
          <div className="dfeLogo">
            <img src={dfelogo} alt="Department for Education Logo" />
          </div>

          <h2>Expert training by Professional Developers</h2>
          <p>
          All the training on the bootcamp was devised and delivered by industry professionals, many of them experts in their field. They have learned key skills that employers have told us they need to hit the ground running and deliver an amazing ROI within weeks.
          They have been trained in Semantic HTML & CSS, Bootstrap, Web Accessibility, Wordpress and content management, introduction to JS and Source control with Git. Our apprenticeship.
          </p>

          <h2>Hire one of our grads today</h2>
          <p>
          For more information about our industry led apprenticeship scheme or to interview or hire one of these people, please get in touch using the form below.
          </p>

        </header>
        <section className="tiles">
          <article className="style1">
            <span className="image">
              <img src={Tom} alt="" />
            </span>
            <Link to="/Tom">
              <h2>Tom</h2>
              <div className="content">
                <p>
                  Tom's Story
                </p>
              </div>
            </Link>
          </article>
          <article className="style2">
            <span className="image">
              <img src={Rebecca} alt="" />
            </span>
            <Link to="/Rebecca">
              <h2>Rebecca</h2>
              <div className="content">
                <p>
                  Rebecca's Story
                </p>
              </div>
            </Link>
          </article>
          <article className="style3">
            <span className="image">
              <img src={Joana} alt="" />
            </span>
            <Link to="/Joana">
              <h2>Joana</h2>
              <div className="content">
                <p>
                  Joana's Story
                </p>
              </div>
            </Link>
          </article>
          <article className="style4">
            <span className="image">
              <img src={Irene} alt="" />
            </span>
            <Link to="/Irene">
              <h2>Irene</h2>
              <div className="content">
                <p>
                  Irene's Story
                </p>
              </div>
            </Link>
          </article>
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
