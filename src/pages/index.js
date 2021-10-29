import React from 'react';

import Layout from '../components/Layout';

import lcrcalogo from '../assets/images/lcrca-logo.jpeg';
import dfelogo from '../assets/images/Department_for_Education.png';
import Tom from '../assets/images/tom.jpeg';
import Rebecca from '../assets/images/rebecca.jpeg';
import Joana from '../assets/images/joana.jpeg';
import Irene from '../assets/images/irene.jpeg';
import Riccardo from '../assets/images/riccardo.jpg';
import Cal from '../assets/images/cal.jpeg';


import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <header>
          <h1>
          Hire A Web Developer Grad Today!
            <br />
          </h1>
          <p>
          Looking to recruit a web developer to help improve your company’s website? Hire the most ambitious and driven developers looking for their next career opportunity.           
          </p>
          <p>
          All these people have already been trained by us on an 8 week intensive digital skills bootcamp funded by the Dept for Education through Liverpool City Region.
          </p>
          <p>
          To interview or hire one of these people, please get in touch using the form below.
          </p>

          <div className="lcrcaLogo">
            <img src={lcrcalogo} alt="LCRCA Logo"/>
          </div>
          
          <div className="dfeLogo">
            <img src={dfelogo} alt="Department for Education Logo" />
          </div>

          <h2>Expert training by Professional Developers</h2>
          <p>
          All the training on the bootcamp was devised and delivered by industry professionals, many of them experts in their field. They have learned key skills that employers have told us they need to hit the ground running and deliver an amazing ROI within weeks. They have been trained in semantic HTML & CSS, Bootstrap, web accessibility, Wordpress and content management, as well as an introduction to JavaScript and source control with Git.
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
          <article className="style1">
            <span className="image">
              <img src={Cal} alt="Cal" />
            </span>
            <Link to="/Cal">
              <h2>Cal</h2>
              <div className="content">
                <p>
                  Cal's Story
                </p>
              </div>
            </Link>
          </article>
          <article className="style2">
            <span className="image">
              <img src={Riccardo} alt="Riccardo" />
            </span>
            <Link to="/Riccardo">
              <h2>Riccardo</h2>
              <div className="content">
                <p>
                  Riccardo's Story
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
