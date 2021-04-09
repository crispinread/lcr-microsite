import React from 'react';
import Layout from '../components/Layout';
import lcrcalogo from '../assets/images/lcrca-logo.jpeg';

import { Link } from 'gatsby';

const ApprenticeshipsPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <header>
          <h1>
            Apprenticeships            <br />
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
      </div>
    </div>
  </Layout>
);

export default ApprenticeshipsPage;
