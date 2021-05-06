import React from 'react';

import Layout from '../components/Layout';

import lcrcalogo from '../assets/images/lcrca-logo.jpeg';
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
          Liverpool City Region Receives Valuable Tech Skills in 2021
            <br />
          </h1>
          <p>
          Working in partnership with the Liverpool City Region Combined Authority,
          we'd like to invite you to apply to these fantastic digital skills bootcamps
          which will focus on front-end coding and software development.
          </p>

          <p>
          These courses are completely free, delivered remotely (lockdown-friendly), and
          taught by experienced professionals with years of experience. They're exclusively
          available for people aged 19 and over in Liverpool, Wirral, Sefton, Knowsley,
          St Helens, and Halton.
          </p>

          <p>
          The main purpose of this programme is to make jobs in tech more accessible for people
          in the BAME community, female candidates, and those who have recently been made
          redundant or unemployed due to lockdown. But we’re also looking to help people
          currently in entry-level tech roles progress up the ladder more quickly and easily,
          as well as introducing people from non-technical backgrounds to the wonderful world
          of coding.
          </p>
          <div className="lcrcaLogo">
            <img src={lcrcalogo} alt="LCRCA Logo"/>
          </div>
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
