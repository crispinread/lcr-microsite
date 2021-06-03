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
            Apprenticeships
          </h1>
          <p>
          The Coders Guild have over 8 years experience delivering modern technical apprenticeships - way before apprenticeships were cool. We firmly believe they are the key to the future of the digital industry in this country.
          </p>

          <p>
          Back in 2012 a group of developers got together to create a new kind of apprenticeship. We wanted to solve the key issues facing our communities and businesses. We set out to create a programme that would:
            <ul>
              <li>Increase inclusion and diversity across the industry.</li>
              <li>Raise the bar on code quality and promote knowledge share.</li>
              <li>Secure the local talent pipelines.</li>
            </ul>
          </p>

          <p>
          We’ve been running since 2013, well before apprenticeships were ‘cool’. We were part of the pilot and trailblazer schemes that determined the format and contents of the new Apprenticeship Standards in Software Development.

          …and when we say industry-led - we actually mean it! All technical training is devised, delivered and under constant review by expert developers. Our Open Source curriculum is available on GitHub.     
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